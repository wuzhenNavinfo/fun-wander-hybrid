<template>
    <div class="container">
        <div id="leafletMap" class="map-container"></div>
    </div>
</template>

<script>
    import L from 'leaflet'
    import ajax from '../utils/ajax'
    import util from '../utils/util'
    import 'leaflet/dist/leaflet.css'
    import events from '@/utils/events'
    // import appHeader from '@/components/header'
    import getRender from '../utils/maprander'

    L.Icon.Default.prototype.options.imagePath = '/res/leaflet/images/'

    export default {
        name: 'LeafletMap',
        props: {
            'showCenterPoint': 0 // 是否显示中心点 0-不显示 1-显示
        },
        components: {
        },
        data: function () {
            return {
                building: null,
                map: null,
                layers: [],
                locationMarker: null,
                poiFaces: [],
                selectedPoiFace: null
            }
        },
        watch: {
        },
        mounted: function () {
            // 创建地图;
            this.createMap();
            this.showBuilding(this.globalData.currentBuilding.id);

            // 清理地图
            this.$bus.$on(events.MAPCLEAR, () => {
                if (this.selectedPoiFace) {
                    this.selectedPoiFace.remove();
                }
                if (this.locationMarker) {
                    this.locationMarker.remove();
                }
                if (this.selectLoactionMarker) {
                    this.selectLoactionMarker.remove();
                }
            })

            if (this.showCenterPoint == 0) {
                this.$bus.$on(events.FLOORCHANGING, data => {
                    this.loadFeatures(data, 1);
                });
                // 地图定位到当前位置
                this.$bus.$on(events.MAPLOCATION, location => {
                    this.map.panTo(location);
                });
            } else if (this.showCenterPoint == 1) {
                this.$bus.$on(events.FLOORCHANGING, data => { // 切换楼层的事件
                    this.loadFeatures(data, 0);
                });
                this.loadFeatures(this.globalData.currentFloorId, 0);
                this.handleSelectpointOnMap();
            } else { // 其他类型

            }
        },
        destroyed() {
            this.$bus.$off(events.FLOORCHANGING);
            this.$bus.$off(events.MAPCLEAR);
        },
        methods: {
            mapClick: function (event) { // 地图点击事件
                this.$bus.$emit(events.MAPCLICK, event);
                if (this.selectedPoiFace) {
                    this.selectedPoiFace.remove();
                }
                if (this.locationMarker) {
                    this.locationMarker.remove();
                }
            },
            // 处理地图上点选起始点的逻辑
            handleSelectpointOnMap: function () {

                let pixToContainer = null;
                let currentLocation = [34.29231145532328, 108.94801229238512];
                this.selectLoactionMarker = L.marker(currentLocation).addTo(this.map);
                let isReady = false;


                // 将地图中心设置为当前点;
                this.map.setView(currentLocation, this.globalData.zoom);

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
                });
                
                // 当地图拖动结束来触发查询事件;
                this.map.on('dragend', data => {
                    this.$bus.emit(events.GETNEARPOINTS, {event: data, currentLocation: currentLocation});
                });

                // 监听来自areaList的列表点选事件;
                this.$bus.on(events.SELECTSTARTANDEND, data => {
                    this.map.panTo(data.coordinates);
                    this.selectLoactionMarker.setLatLng(data.coordinates);
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
                this.map.on('zoom', data => {
                    this.globalData.zoom = data.target._zoom;
                });
            },
            // 显示商场轮廓;
            showBuilding: function (tmpId) {
                tmpId = tmpId ? tmpId : '6101000094';
                if(!tmpId) throw Error('不是一个有效的商场id');
                this.loadBuilding(tmpId).then(data => {
                    if (data) {
                        data.layer.addTo(this.map);
                        this.map.setView(data.center, this.globalData.zoom);
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
                    console.error(err);
                    return null
                })
            },
            /**
             * 地图渲染poi、link、face等
             * @param floorId 楼层id
             * @param falg 是否增加poi点击事件的标志 0表示不增加 1表示增加点击事件
             */
            loadFeatures: function (floorId, flag) {
                this.layers.forEach(item => {
                    if (item) {
                        item.remove();
                    }
                });
                this.layers = [];
                var that = this;
                const layers = [this.loadPoiFace(floorId),  this.loadLink(floorId), this.loadPoi(floorId, flag)];

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
                        let render = getRender(res);
                        return [L.geoJSON(render.feature, render.style)];
                    } else {
                        return null
                    }
                })
                .catch(err => {
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
                    console.error(err);
                    return null
                })
            },
            /**
             * 地图渲染poi以及文字
             * @param floorId 楼层id
             * @param falg 是否增加poi点击事件的标志 0表示不增加 1表示增加点击事件
             */
            loadPoi: function (floorId, flag) {
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
                            // images:src='/image/shoplogo.png',
                            style: {
                                // 
                                radius: 2,
                                color: '#fde3b1',
                                fill: true,
                                fillColor: '#000',
                                fillOpacity: 1
                            },
                            pointToLayer: function (feature, latlng) {
                                var circleMarker = L.circleMarker(latlng);
                                if (flag == 1) {
                                    circleMarker.on('click', function (e) {
                                        that.map.off('click');
                                        const latlng = [e.latlng.lat, e.latlng.lng];
                                        that.locationMarker && that.map.removeLayer(that.locationMarker);
                                        that.map.panTo(latlng);
                                        that.locationMarker = L.marker(latlng).addTo(that.map);
                                        // that.$bus.$emit(events.GETNEARPOINTS);

                                        that.$bus.$emit(events.SELECTPOI, e.target.feature);

                                        that.drawFaceBorder(e.target.feature.properties.id);

                                        setTimeout(function () { // 解决 marker事件和地图事件重复执行的问题
                                            that.map.on('click', function (event) {
                                                console.info('click');
                                                that.mapClick(event);
                                            });
                                        }, 100)
                                    });
                                }
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
            drawFaceBorder(poiId) {
                var face;
                for (let i = 0, len = this.poiFaces.length; i < len; i++) {
                    if (this.poiFaces[i].properties.poiId === poiId) {
                        face = this.poiFaces[i];
                        break;
                    }
                }
                const style = {
                    style: function(feature) {
                        return {
                            color: '#26a2ff', //店铺边框色彩
                            fill: false,
                            fillOpacity: 0.5
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