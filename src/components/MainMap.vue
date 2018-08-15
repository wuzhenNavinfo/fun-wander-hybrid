<template>
    <div id='mapContainer'>
    </div>
</template>

<script>
    import mapboxgl from 'mapbox-gl';
    import ajax from '../utils/ajax';
    import util from '../utils/util';

    mapboxgl.accessToken =
        'pk.eyJ1IjoibWFkc2hhd24iLCJhIjoiY2lqY2ZwcW4zMDAwMXc2a3VybmsxdzU1OSJ9.UTV2YhX9rABrPQIEI2QKwg';
    export default {
        name: 'MainMap',
        props: {},
        mounted: function() {
            this.createMap();
        },
        methods: {
            createMap: function() {
                const map = new mapboxgl.Map({
                    container: 'mapContainer',
                    style: 'mapbox://styles/mapbox/streets-v9', // 后续注意style本地化
                    minZoon: 10,
                    maxZoom: 24,
                    zoom: 15,
                    center: [108.94400235446722, 34.300590391379714]
                });
                map.on('load', () => {
                    map.addSource('building', {
                        type: 'geojson',
                        data: null // 无数据时默认值必须为null
                    });
                    map.addSource('poi-face', {
                        type: 'geojson',
                        data: null
                    });
                    map.addSource('link', {
                        type: 'geojson',
                        data: null
                    });
                    map.addSource('poi', {
                        type: 'geojson',
                        data: null
                    });

                    map.addLayer({
                        id: 'building-layer',
                        type: 'fill',
                        source: 'building',
                        layout: {},
                        paint: {
                            'fill-color': '#666',
                            'fill-opacity': 0.2
                        }
                    });

                    map.addLayer({
                        id: 'poi-face-layer',
                        type: 'fill',
                        source: 'poi-face',
                        layout: {},
                        paint: {
                            'fill-outline-color': '#999',
                            'fill-color': '#999',
                            'fill-opacity': 0.2
                        }
                    });

                    map.addLayer({
                        id: 'link-layer',
                        type: 'line',
                        source: 'link',
                        layout: {},
                        paint: {
                            'line-opacity': 0.8,
                            'line-color': '#aaa',
                            'line-width': 2
                        }
                    });

                    map.addLayer({
                        id: 'poi-layer',
                        type: 'circle',
                        source: 'poi',
                        layout: {
                        },
                        paint: {
                            'circle-radius': 2,
                            'circle-color': '#000'
                        }
                    });

                    map.addLayer({
                        id: 'poi-symbol-layer',
                        type: 'symbol',
                        source: 'poi',
                        layout: {
                            'text-field': '{name}',
                            'text-font': ["Open Sans Regular","Arial Unicode MS Regular"],
                            'text-size': 12,
                            'text-offset': [0, 0],
                            'text-anchor': 'top'
                        },
                        paint: {
                        }
                    });
                    
                    this.loadBuilding(6101000094).then(data => {
                        if (data) {
                            map.getSource('building').setData(data);
                            map.flyTo({
                                center: data.properties.center
                            });
                        }                                             
                    });

                    this.loadPoiFace(61010000941001).then(res => {
                        if (res) {
                            map.getSource('poi-face').setData({
                                type: 'FeatureCollection',
                                features: res
                            });
                        }                        
                    });

                    this.loadLink(61010000941001).then(res => {
                        if (res) {
                            map.getSource('link').setData({
                                type: 'FeatureCollection',
                                features: res
                            });
                        }                        
                    });

                    this.loadPoi(61010000941001).then(res => {
                        if (res) {
                            map.getSource('poi').setData({
                                type: 'FeatureCollection',
                                features: res
                            });
                        }                        
                    });
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
                                center: temp.center_coordinate.split(',').map(it => parseFloat(it))
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
    #mapContainer {
        width: 100%;
        height: 100%;
    }
</style>
