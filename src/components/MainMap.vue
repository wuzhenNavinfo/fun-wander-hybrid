<template>
    <div id="mapContainer">
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
                    style: 'mapbox://styles/mapbox/streets-v9',
                    minZoon: 10,
                    maxZoom: 24,
                    zoom: 15,
                    center: [108.94400235446722, 34.300590391379714]
                });
                map.on('load', () => {
                    map.addSource('building', {
                        type: 'geojson'
                    });

                    map.addLayer({
                        id: 'building-layer',
                        type: 'fill',
                        source: 'building',
                        layout: {},
                        paint: {
                            'fill-color': '#088',
                            'fill-opacity': 0.8
                        }
                    });
                    
                    this.loadBuilding(6101000094).then(res => {
                        const data = {
                            type: 'FeatureCollection'
                        };
                        let center;
                        data.features = res.map(it => {
                            const geom = util.wktToGeojson(it.geometry)
                            center = geom.coordinates[0][0];
                            return {
                                type: 'Feature',
                                properties: {
                                    name: it.name
                                },
                                geometry: geom
                            }
                        });
                        map.getSource('building').setData(data);

                        map.flyTo({
                            center: center
                        });
                    });
                });
            },
            loadBuilding: function(buildingId) {
                return ajax.get(`/indoor/building/${buildingId}`).then(res => {
                    return res.data;
                });
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #mapContainer {
        width: 100%;
        height: 100%;
    }
</style>
