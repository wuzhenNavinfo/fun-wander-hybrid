<template>
    <div id="leafletMap" class="map-container">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import L from 'leaflet'
    import ajax from '../utils/ajax'
    import util from '../utils/util'
    import 'leaflet/dist/leaflet.css'
    import events from '@/utils/events'
    import appHeader from '@/components/header'
    export default {
        name: 'LeafletMap',
        props: {},
        components: {
            appHeader
        },
        data: function () {
            return {
                map: null,
                layers: []
            }
        },
        mounted: function () {
            // 创建地图;
            this.createMap();

            this.$bus.$on(events.FLOORCHANGING, data => {
                this.loadFeatures(data);
            });

            if (this.$route.path === '/map/info') {
                this.showBuiding();
            }
            // 如果是从地图选点进入的逻辑代码
            if (this.$route.path === '/map/point') {
                this.showBuiding();
                this.loadFeatures(61010000941002);
                // 假定这是当前位置;
                let locationMarker = null;
                this.map.panTo([34.300590391379714, 108.94400235446722]);
                locationMarker = L.marker([34.300590391379714, 108.94400235446722]).addTo(this.map);
                this.$bus.$emit(events.GETNEARPOINTS, ['耐克','阿迪达斯','美津浓','彪马','安踏']);
                this.map.on('click', data => {
                    // 移动点
                    const currentLat = data.latlng.lat;
                    const currentlng = data.latlng.lng;
                    locationMarker && this.map.removeLayer(locationMarker);
                    this.map.panTo([currentLat, currentlng]);
                    locationMarker = L.marker([currentLat, currentlng]).addTo(this.map);

                    this.$bus.$emit(events.GETNEARPOINTS, ['耐克','阿迪达斯','李宁','联想']);
                });
            }
        },
        destroyed() {
            this.$bus.$off(events.FLOORCHANGING);
        },
        methods: {
            // 加载腾讯地图;
            createMap: function () {
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
            },
            // 显示商场轮廓;
            showBuiding: function () {
                const tmpId = this.$route.query.id ? this.$route.query.id : 6101000094;
                if(!tmpId) throw Error('不是一个有效的商场id');
                this.loadBuilding(tmpId).then(data => {
                    if (data) {
                        data.layer.addTo(this.map);
                        this.map.setView(data.center, 19);
                    }
                });
            },
            // 获得商场轮廓图层;
            loadBuilding: function (buildingId) {
                return ajax.get(`/indoor/building/${buildingId}`).then(res => {
                    if (res && res.data && res.data.length > 0) {
                        const style = {
                            style: {
                                color: '#d1a990',//商城边框色
                                fill: true,
                                fillColor: '#f8c0e3',//商城地面色
                                fillOpacity: 0.2
                            }
                        };
                        const feature = {
                            type: 'Feature',
                            properties: {
                                id: res.data[0].building_id,
                                kind: res.data[0].kind,
                                name: res.data[0].name,
                                center: res.data[0].center_coordinate.split(',').map(it => parseFloat(
                                    it)).reverse()
                            },
                            geometry: util.wktToGeojson(res.data[0].geometry)
                        }
                        const building = L.geoJSON(feature, style);
                        return {
                            layer: building,
                            center: feature.properties.center
                        };
                    } else {
                        return null
                    }
                }).catch(err => {
                    console.error(err)
                    return null
                })
            },

            loadFeatures: function (floorId) {
                this.layers.forEach(item => {
                    if (item) {
                        item.remove();
                    }
                });
                const layers = [this.loadPoiFace(floorId),  this.loadLink(floorId), this.loadPoi(floorId)];
                Promise.all(layers).then(result => {
                    this.layers = result;
                    result.map(item => {
                        if (item && item.addTo) {
                            item.addTo(this.map);
                        }
                    })
                });
            },

            loadPoiFace: function (floorId) {
                return ajax.get(`/indoor/building/floor/poiFace/${floorId}`).then(res => {
                    if (res && res.data && res.data.length > 0) {
                        var colos = {
                            9203002: '#fd7676',//公共受限区域
                            9205000: '#ddd',//空置单元

                            1103003: '#befe73',//客梯
                            1102000: '#befe73',//楼梯
                            1103001: '#befe73',//扶梯
                            
                            1303014: '#f69d70',
                            1303004: '#d9ceff',
                            1303020: '#f1d35b',//体育
                            1303005: '#f69d70',//金
                            1303015: '#fe9104',//玛斯威顿
                            1303020: '#c6a5a3',//安踏体育
                            1303001: '#fb8ec6',//服装
                            1303002: '#c6a5a3',//鞋
                            1304000: '#81effe',//保健
                            1303000: '#f69d70',//商铺
                            1306004: '#04feef',//中国移动
                            1303007: '#f1d35b',//手机

                            2707000: '#affed1',//医药超市
                            2301000: '#d9ceff',//zhiao
                            1303009: '#f69d70',//酒
                        };
                        const feature = res.data.map(it => {
                            return {
                                type: 'Feature',
                                properties: {
                                    id: it.face_id,
                                    poiId: it.poi_id,
                                    poiKind: it.poi_kind
                                },
                                geometry: util.wktToGeojson(it.geometry)
                            }
                        });
                        const style = {
                            style: function(feature) {
                                console.info(feature);
                                return {
                                color: '#cecece', //店铺边框色彩
                                fill: true,
                                fillColor: colos[feature.properties.poiKind] ?  colos[feature.properties.poiKind] : '#f1d35b',//店铺内部色彩
                                fillOpacity: 0.9
                            }}
                        };
                        return L.geoJSON(feature, style);
                    } else {
                        return null
                    }
                }).catch(err => {
                    console.error(err)
                    return null
                })
            },
            loadLink: function (floorId) {
                return ajax.get(`/indoor/building/floor/link/${floorId}`).then(res => {
                    if (res && res.data && res.data.length > 0) {
                        const feature = res.data.map(it => {
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
                        });
                        const style = {
                            style: {
                                color: '#fff'//线路色彩
                            }
                        };
                        return L.geoJSON(feature, style);
                    } else {
                        return null
                    }
                }).catch(err => {
                    console.error(err)
                    return null
                })
            },
            loadPoi: function (floorId) {
                return ajax.get(`/indoor/building/floor/poi/${floorId}`).then(res => {
                    if (res && res.data && res.data.length > 0) {
                        const feature = res.data.map(it => {
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
                        });
                        const style = {
                            style: {
                                radius: 2,
                                color: '#000',
                                fill: true,
                                fillColor: '#000',
                                fillOpacity: 0.2
                            }
                        };
                        return L.geoJSON(feature, style);
                    } else {
                        return null
                    }
                }).catch(err => {
                    console.error(err)
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
    .map-container {
        width: 100%;
        height: 100%;
    }
</style>