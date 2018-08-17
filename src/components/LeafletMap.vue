<template>
    <div id="leafletMap" class="map-container">
    </div>
</template>

<script>
    import L from 'leaflet'
    import ajax from '../utils/ajax'
    import util from '../utils/util'
    import '../../node_modules/leaflet/dist/leaflet.css'

    export default {
        name: 'LeafletMap',
        props: {},
        mounted: function() {
            this.createMap();
        },
        methods: {
            createMap: function() {
                const map = L.map('leafletMap', {
                    minZoom: 5,
                    maxZoom: 24,
                }).setView([34.300590391379714, 108.94400235446722], 15)

                // 腾讯底图
                L.tileLayer('http://{s}.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style=0', {
                    attribution: 'test',
                    minZoom: 5,
                    maxZoom: 18,
                    id: 'mapbox.streets',
                    subdomains: ['rt0', 'rt1', 'rt2', 'rt3'],
                    tms: true
                }).addTo(map)

                this.loadBuilding(6101000094).then(data => {
                    if (data) {
                        L.geoJSON(data, {
                            style: {
                                color: '#999',
                                fill: true,
                                fillColor: '#666',
                                fillOpacity: 0.2
                            }
                        }).addTo(map);

                        map.setView(data.properties.center, 18);
                    }                                             
                });

                this.loadPoiFace(61010000941001).then(res => {
                    if (res) {
                        L.geoJSON(res, {
                            style: {
                                color: '#999',
                                fill: true,
                                fillColor: '#999',
                                fillOpacity: 0.2
                            }
                        }).addTo(map);
                    }                        
                });

                this.loadLink(61010000941001).then(res => {
                    if (res) {
                        L.geoJSON(res, {
                            style: {
                                color: '#ddd'
                            }
                        }).addTo(map);
                    }                        
                });

                this.loadPoi(61010000941001).then(res => {
                    if (res) {
                        L.geoJSON(res, {
                            style: {
                                radius: 2,
                                color: '#999',
                                fill: true,
                                fillColor: '#999',
                                fillOpacity: 0.2
                            },
                            pointToLayer: function (feature, latlng) {
                                const myIcon = L.divIcon({html: feature.properties.name, className: 'div-icon'});
                                return L.marker(latlng, {icon: myIcon});
                                // return L.circleMarker(latlng);
                            }
                        }).addTo(map);
                    }                        
                });
            },
            loadBuilding: function(buildingId) {
                return ajax.get(`/indoor/building/${buildingId}`).then(res => {
                    if (res && res.data && res.data.length > 0) {
                        const temp = res.data[0];
                        return {
                            type: 'Feature',
                            properties: {
                                id: temp.id,
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
                                        kind: it.kind
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
                                        id: it.id,
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
            }
        }
    };
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
    .map-container {
        width: 100%;
        height: 100%;
    }

    .div-icon {
        width: auto;
        height: auto;
    }
</style>
