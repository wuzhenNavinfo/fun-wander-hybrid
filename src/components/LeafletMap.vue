<template>
    <div class="container">
        <div id="leafletMap" class="map-container"></div>
    </div>
</template>

<script>
    import L from 'leaflet'
    import icon from 'leaflet/dist/images/marker-icon.png';
    import iconShadow from 'leaflet/dist/images/marker-shadow.png';
    import ajax from '../utils/ajax'
    import util from '../utils/util'
    import 'leaflet/dist/leaflet.css'
    import events from '@/utils/events'
    import appHeader from '@/components/header'

    L.Icon.Default.prototype.options.imagePath = '/res/leaflet/images/'

    export default {
        name: 'LeafletMap',
        props: {
            'buildingInfo': Object
        },
        components: {
        },
        data: function () {
            return {
                building: null,
                map: null,
                layers: [],
                locationMarker: null,
                selectLoactionMarker: null,
                poiFaces: [],
                selectedPoiFace: null
            }
        },
        watch: {
//            buildingInfo: function (newVal, oldVal) {
//                this.building = newVal;
//                this.showBuilding(newVal.id);
//            }
            // 判断路由应放在监听函数里,因为mounted只会加载一次;
            $route(to, from) {
                if (to.path === '/main/info') {
                    this.showBuilding();
                } else if (to.path === '/main/point') {
                    this.handleSelectpointOnMap();
                } else {
                    if (this.map.hasLayer(this.selectLoactionMarker)) {
                        this.map.removeLayer(this.selectLoactionMarker);
                    }
                }
            }
        },
        mounted: function () {
            // 创建地图;
            this.createMap();
            this.showBuilding(this.globalData.currentBuilding.id);

            this.$bus.$on(events.FLOORCHANGING, data => {
                this.loadFeatures(data);
            });
            
            if (this.$route.path === '/main/info') {
                this.showBuilding();
            } else if (this.$route.path === '/main/point') {
                this.handleSelectpointOnMap()
            }
        },
        destroyed() {
            this.$bus.$off(events.FLOORCHANGING);
        },

        methods: {
            // 处理地图上点选起始点的逻辑
            handleSelectpointOnMap: function () {
                this.showBuilding();
                this.loadFeatures(61010000941002);
                // 假定这是当前位置;
                let radius = 15; // 搜索半径;
                let pixToContainer = null;
                let currentLocation = [34.29231145532328, 108.94801229238512];
                this.selectLoactionMarker = L.marker(currentLocation).addTo(this.map);
                let isReady = false;


                // 将地图中心设置为当前点;
                this.map.setView(currentLocation, 20);

                this.loadAreaLists(radius, currentLocation).then(result => {
                    this.$bus.emit(events.GETNEARPOINTS, result);
                })

                setTimeout(() => {
                    pixToContainer = this.map.latLngToContainerPoint(currentLocation);
                    isReady = true;
                }, 300);

                // 监听地图移动事件;
                this.map.on('move', data => {
                    // 移动点
                    if (!isReady) return;
                    currentLocation = this.map.containerPointToLatLng(pixToContainer);
                    this.selectLoactionMarker.setLatLng(currentLocation);
                    // 可以做一些对marker的动画处理;
                    // console.log(this.selectLoactionMarker)
                });
                
                // 当地图拖动结束来触发查询事件;
                this.map.on('dragend', data => {
                    this.loadAreaLists(radius, currentLocation).then(result => {
                        this.$bus.$emit(events.GETNEARPOINTS, result);
                    })
                });

                // 监听来自areaList的列表点选事件;
                this.$bus.on(events.SELECTSTARTANDEND, data => {
                    this.map.panTo(data.coordinates);
                    this.selectLoactionMarker.setLatLng(data.coordinates);
                });
            },
            loadAreaLists: function(radius, currentLocation) {
                return this.loadAreaPoints(61010000941002).then(res => {
                    let result = res.map(item => {
                        const tmpLatLng = L.latLng(...item.geometry.coordinates.reverse());
                        item.distance = this.map.distance(currentLocation, tmpLatLng);
                        return item;
                    });
                    return result.sort((a,b) => a.distance - b.distance).filter(item => item.distance < radius);
                });
            },
            loadAreaPoints: function(floorId) {
                return ajax.get(`/indoor/building/floor/poi/${floorId}`).then(res => {
                    let feature = {};
                    if (res && res.data && res.data.length > 0) {
                        feature = res.data.map(it => {
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

                    }
                    return feature;
                });
            },
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
            showBuilding: function (tmpId) {
                tmpId = tmpId ? tmpId : '6101000094';
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
                this.layers = [];
                var that = this;
                const layers = [this.loadPoiFace(floorId),  this.loadLink(floorId), this.loadPoi(floorId)];

                Promise.all(layers).then(result => {
                    result.forEach(item => {
                        that.layers = that.layers.concat(item);
                    });

                    that.layers.forEach(item => {
                        if (item && item.addTo) {
                            item.addTo(that.map);
                        }
                    })
                });
            },
            loadPoiFace: function (floorId) {
                var that = this;
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
                        that.poiFaces = feature;
                        const style = {
                            style: function(feature) {
                                return {
                                color: '#cecece', //店铺边框色彩
                                fill: true,
                                fillColor: colos[feature.properties.poiKind] ?  colos[feature.properties.poiKind] : '#f1d35b',//店铺内部色彩
                                fillOpacity: 0.9
                            }}
                        };
                        return [L.geoJSON(feature, style)];
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
                        return [L.geoJSON(feature, style)];
                    } else {
                        return null
                    }
                }).catch(err => {
                    console.error(err)
                    return null
                })
            },
            loadPoi: function (floorId) {
                var that = this;
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

                        var layer1 = L.geoJSON(feature, {
                            style: {
                                radius: 2,
                                color: '#000',
                                fill: true,
                                fillColor: '#000',
                                fillOpacity: 1
                            },
                            pointToLayer: function (feature, latlng) {
                                var circleMarker = L.circleMarker(latlng);
                                circleMarker.on('click', function (e) {
                                    const latlng = [e.latlng.lat, e.latlng.lng];
                                    that.locationMarker && that.map.removeLayer(that.locationMarker);
                                    that.map.panTo(latlng);
                                    that.locationMarker = L.marker(latlng).addTo(that.map);
                                    that.$bus.$emit(events.GETNEARPOINTS);

                                    that.$bus.$emit(events.SELECTPOI, e.target.feature);

                                    that.drawFace(e.target.feature.properties.id);
                                });
                                return circleMarker;
                            }
                        });

                        var layer2 = L.geoJSON(feature, {
                            pointToLayer: function (feature, latlng) {
                                const myIcon = L.divIcon({
                                    html: feature.properties.name,
                                    className: 'div-icon',
                                    iconSize: [50, 20],
                                    iconAnchor: [25, -5],
                                });
                                return L.marker(latlng, {icon: myIcon});
                            }
                        });

                        return [layer2, layer1]
                    } else {
                        return null
                    }
                }).catch(err => {
                    console.error(err)
                    return null
                })
            },
            drawFace(poiId) {
                var face;
                for (let i = 0, len = this.poiFaces.length; i < len; i++) {
                    if (this.poiFaces[i].properties.poiId === poiId) {
                        face = this.poiFaces[i];
                        break;
                    }
                }
                // face.geometry = util.wktToGeojson(face.geometry);
                const style = {
                    style: function(feature) {
                        return {
                            color: 'red', //店铺边框色彩
                            fill: true,
                            // fillColor: 'red', //店铺内部色彩
                            fillOpacity: 0.9
                        }}
                };
                var layer = L.geoJSON([face], style);
                if (this.selectedPoiFace) {
                    this.selectedPoiFace.remove();
                }
                this.selectedPoiFace = layer;
                layer.addTo(this.map)
            }
        }
    };
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .map-container {
        width: 100%;
        flex: 1;
    }
</style>