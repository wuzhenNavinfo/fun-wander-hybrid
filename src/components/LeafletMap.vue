<template>
    <div class="container">
        <div class="header">
            <div class="title" @click="goBack();">
                <i class="mintui mintui-back"></i>
                <span class="name">{{currentBuliding.name}}</span>
            </div>
        </div>
        <div id="leafletMap" class="map-container"></div>
        <div class="footer">
            <div class="title" @click="openSelectPanel();">
                <i class="mintui mintui-search"></i>
                <span class="name">选择楼层</span>
            </div>
            <div class="content" v-show="openSelectPanelFlag">
                <div v-for="item in flowInfo" @click="selectFloor(item)">
                    <mt-cell v-if="item.properties.id==selectedFloor.properties.id" icon="success" :title="item.properties.name" :label="item.properties.infor"></mt-cell>
                    <mt-cell v-if="item.properties.id!=selectedFloor.properties.id" :title="item.properties.name" :label="item.properties.infor"></mt-cell>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import L from 'leaflet'
    import ajax from '../utils/ajax'
    import util from '../utils/util'
    import 'leaflet/dist/leaflet.css'

    var vueObj = null;

    export default {
        name: 'LeafletMap',
        props: {},
        data: function () {
          return {
              map: null,
              currentBuliding: {},
              flowInfo: [],
              selectedFloor: null,
              layers: null,
              openSelectPanelFlag: false
          }
        },
        mounted: function() {
            vueObj = this;
            this.currentBuliding = {
                name: this.$route.query.name,
                id: this.$route.query.id
            };
            this.createMap();
        },
        methods: {
            goBack: function () { // 返回方法
              this.$router.push('/');
            },
            openSelectPanel() {  // 打开选择楼层的面板
                this.openSelectPanelFlag = !this.openSelectPanelFlag;
            },
            getMapObj(){//获取加载的地图对象
                return vueObj.map;
            },
            selectFloor(item) { // 选择楼层
                this.flowInfo.forEach(item => {
                    item.selected = false;
                });
                this.selectedFloor = item;
                this.layers.forEach(item => {
                    if (item) {
                        item.remove();
                    }
                });
                this.loadFeatures(item.properties.id);
            },
            loadFeatures (floorId) {
                const that = this;
                that.layers = [];
                var p1 = this.loadPoiFace(floorId).then(res => {
                    var layer = null;
                    if (res) {
                        layer = L.geoJSON(res, {
                            style: {
                                color: '#999',
                                fill: true,
                                fillColor: '#999',
                                fillOpacity: 0.2
                            }
                        }).addTo(that.map);
                    }
                    return [layer];
                });

                var p2 = this.loadLink(floorId).then(res => {
                    var layer = null;
                    if (res) {
                        layer = L.geoJSON(res, {
                            style: {
                                color: '#ddd'
                            }
                        }).addTo(that.map);
                    }
                    return [layer];
                });

                var p3 = this.loadPoi(floorId).then(res => {
                    var layer1 = null;
                    var layer2 = null;
                    if (res) {
                        layer1 = L.geoJSON(res, {
                            style: {
                                radius: 2,
                                color: '#999',
                                fill: true,
                                fillColor: '#999',
                                fillOpacity: 0.2
                            },
                            pointToLayer: function (feature, latlng) {
                                var circleMarker = L.circleMarker(latlng);
                                circleMarker.on('click', function (e) {
                                });
                                return circleMarker;
                            }
                        }).addTo(that.map);

                        layer2 = L.geoJSON(res, {
                            pointToLayer: function (feature, latlng) {
                                const myIcon = L.divIcon({
                                    html: feature.properties.name,
                                    className: 'div-icon',
                                    iconSize: [50, 20],
                                    iconAnchor: [25, -5],
                                });
                                return L.marker(latlng, {icon: myIcon});
                            }
                        }).addTo(that.map);
                    }
                    return [layer1, layer2];
                });

                Promise.all([p1, p2, p3]).then(function (data) {
                    data[2][0].bringToFront(); // 将poi点的layer放置在最上面否则点击事件不起作用
                    data.forEach(item => {
                        that.layers = that.layers.concat(item);
                    });
                });
            },

            createMap: function() {
                this.map = L.map('leafletMap', {
                    minZoom: 5,
                    maxZoom: 24,
                    zoomControl: false,
                    attributionControl: false
                }).setView([34.300590391379714, 108.94400235446722], 17)

                // 腾讯底图
                L.tileLayer('http://{s}.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style=0', {
                    // attribution: 'test',
                    minZoom: 5,
                    maxZoom: 18,
                    id: 'mapbox.streets',
                    subdomains: ['rt0', 'rt1', 'rt2', 'rt3'],
                    tms: true
                }).addTo(this.map)

                var that = this;
                this.loadBuilding(this.currentBuliding.id).then(data => {
                    if (data) {
                        L.geoJSON(data, {
                            style: {
                                color: '#999',
                                fill: true,
                                fillColor: '#666',
                                fillOpacity: 0.2
                            }
                        }).addTo(that.map);

                        that.map.setView(data.properties.center, 19);
                    }
                });

                this.loadFloorByBuilding(this.currentBuliding.id).then(res => {
                    this.flowInfo = res;
                    this.selectedFloor = res[0];
                    this.loadFeatures(res[0].properties.id); // 默认加载第一层的信息
                });
            },
            loadBuilding: function(buildingId) {
                return ajax.get(`/indoor/building/${buildingId}`).then(res => {
                    if (res && res.data && res.data.length > 0) {
                        const temp = res.data[0];
                        return {
                            type: 'Feature',
                            properties: {
                                id: temp.building_id,
                                kind: temp.kind,
                                name: temp.name,
                                center: temp.center_coordinate.split(',').map(it => parseFloat(it)).reverse()
                            },
                            geometry: util.wktToGeojson(temp.geometry)
                        }
                    } else {
                        return null
                    }
                }).catch(err => {
                    console.error(err)
                    return null
                })
            },
            loadPoiFace: function(floorId) {
                return ajax.get(`/indoor/building/floor/poiFace/${floorId}`).then(res => {
                    if (res && res.data && res.data.length > 0) {
                        return res.data.map(it => {
                                return {
                                    type: 'Feature',
                                    properties: {
                                        id: it.face_id,
                                        poiId: it.poi_id,
                                        poiKind: it.poi_kind
                                    },
                                    geometry: util.wktToGeojson(it.geometry)
                                }
                            })
                    } else {
                        return null
                    }
                }).catch(err => {
                    console.error(err)
                    return null
                })
            },
            loadLink: function(floorId) {
                return ajax.get(`/indoor/building/floor/link/${floorId}`).then(res => {
                    if (res && res.data && res.data.length > 0) {
                        return res.data.map(it => {
                                return {
                                    type: 'Feature',
                                    properties: {
                                        id: it.link_id,
                                        kind: it.kind,
                                        type: it.type,
                                        snodeId: it.snode_id,
                                        enodeId: it.enode_id
                                    },
                                    geometry: util.wktToGeojson(it.geometry)
                                }
                            })
                    } else {
                        return null
                    }
                }).catch(err => {
                    console.error(err)
                    return null
                })
            },
            loadPoi: function(floorId) {
                return ajax.get(`/indoor/building/floor/poi/${floorId}`).then(res => {
                    if (res && res.data && res.data.length > 0) {
                        return res.data.map(it => {
                                const geom = util.wktToGeojson(it.geometry)
                                return {
                                    type: 'Feature',
                                    properties: {
                                        id: it.poi_id,
                                        kind: it.kind,
                                        name: it.name,
                                        faceId: it.face_id,
                                    },
                                    geometry: geom
                                }
                            })
                    } else {
                        return null
                    }
                }).catch(err => {
                    console.error(err)
                    return null
                })
            },
            loadFloorByBuilding: function (buildingId) {
                return ajax.get(`/indoor/building/floor/${buildingId}`).then(res => {
                    if (res && res.data && res.data.length > 0) {
                        return res.data.map(it => {
                            const geom = util.wktToGeojson(it.geometry)
                            return {
                                type: 'Feature',
                                properties: {
                                    id: it.fl_id,
                                    infor: it.fl_infor,
                                    name: it.fl_name,
                                    num: it.fl_num,
                                },
                                geometry: geom
                            }
                        })
                    } else {
                        return null
                    }
                }).catch(err => {
                    console.error(err);
                    return null
                })
            }
        }
    };
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
    .container {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .container .header {
        position: absolute;
        width: 100%;
        z-index: 999;
        background-color: #c3c3c3;
        opacity: 1;
        top: 0px;
        left: 0px;
    }
    .container .footer {
        position: absolute;
        width: 100%;
        z-index: 999;
        left: 0px;
        bottom: 0px;
    }
    .container .header .title, .container .footer .title {
        padding: 10px;
        background-color: #c3c3c3;
    }
    .container .footer .content {
        height: 150px;
        max-height: 150px;
        background-color: #ffffff;
        overflow: auto;
    }
    .container .header .name, .container .footer .name {
        margin-left: 6px;
    }
    .map-container {
        width: 100%;
        height: 100%;
    }
</style>
