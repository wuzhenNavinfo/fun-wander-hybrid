<template>
    <div>
        <div class="searchContainer" v-show="searchContainer">
            <div class="searchPanel">
                <div><input type="input" v-model="startPlace.name" placeholder="输入起点" v-on:input="queryPlace('start')" v-on:click="selectType('start')"/></div>
                <div><input type="input" v-model="endPlace.name" placeholder="输入终点" v-on:input="queryPlace('end')" v-on:click="selectType('start')"/></div>
            </div>
            <div class="searchType">
                <span v-on:click="switchMode($event.target, 'name')">名称搜索</span>
                <span v-on:click="switchMode($event.target, 'search')">地图选点</span>
            </div>
            <div class="resultPanel">
                <!-- <ul>
                    <li v-for="place in placeList" :key="place.poi_id" v-on:click="selectPlace(place)">{{place.name}}</li>
                </ul> -->
                <!-- <el-row>
                    <el-col :span="24" v-for="place in placeList" :key="place.poi_id" v-on:click="selectPlace(place)"><div class="grid-content bg-purple-dark">{{place.name}}</div></el-col>
                    <elnav></elnav>
                </el-row> -->
                <mt-index-list>
                    <mt-index-section v-for="(place, index) in placeList" :key="index" :index="place.index" >
                        <mt-cell v-for="p in place.data" :key="p.poi_id" :title="p.name" @click.native="selectPlace(p)">
                        </mt-cell>
                    </mt-index-section>
                </mt-index-list>
            </div>
        </div>
        <div class="mapContainer" v-show="!searchContainer">
            <leaflet-map name="LeafletMap" ref="leafletMap"></leaflet-map>
        </div>
    </div>
</template>

<script>
    import L from 'leaflet';
    import util from '../utils/util'
    import LeafletMap from './LeafletMap.vue';
    import appHeader from './header.vue';
    import ajax from '../utils/ajax';

    export default {
        name: 'PlaceSearch',
        props: {},
        data() {
            return {
                placeList: [],
                searchType: 'start',
                startPlace: {name: ''},
                endPlace: {name: ''},
                searchContainer: true
            }
        },
        components: {
            LeafletMap
        },
        mounted: function() {
            this.switchMode(document.querySelectorAll('.searchType span')[0], 'name');
        },
        methods: {
            queryPlace: function(type) {
                let searchName = this.startPlace.name;
                if(type === 'end'){
                    searchName = this.endPlace.name;
                }
                if(searchName === '') {
                    this.placeList = [];
                    return;
                }
                this.searchType = type;
                var param = {
                    buildingId: 6101000094,
                    // buildingId: this.$route.query.id,
                    tip: searchName
                };
                ajax.get(`/indoor/building/search/poi/`, param).then(res => {
                    if(res.data && res.data.length !== 0){
                        var resultObj = {}, resultArr = [];
                        res.data.forEach(e => {
                            resultObj[e.name[0]] = resultObj[e.name[0]] || [];
                            resultObj[e.name[0]].push(e);
                        })
                        for(var o in resultObj){
                            resultArr.push({
                                index: o,
                                data: resultObj[o]
                            })
                        }
                        this.placeList = resultArr;
                    }else{
                        this.placeList = [];
                    }
                })
            },
            selectType: function(type) {
                this.searchType = type;
            },
            selectPlace: function(place) {
                if(this.searchType === 'start') {
                    this.startPlace = place;
                } else {
                    this.endPlace = place;
                }
                ajax.get('/indoor/building/poi/' + place.poi_id).then(poi => {
                    if(this.searchType === 'start'){
                        this.startPlace.nodeId = poi.data[0].node_id;
                    }else{
                        this.endPlace.nodeId = poi.data[0].node_id;
                    }
                    

                    if(this.startPlace.name !== '' && this.endPlace.name !== '') {
                        var self = this;
                        var param = {
                            buildingId: 6101000094,
                            sNodeId: this.startPlace.nodeId,
                            eNodeId: this.endPlace.nodeId
                            // sNodeId: '61010000941002050177',
                            // eNodeId: '61010000941002050017'
                        };
                        ajax.get('indoor/building/link/route', param).then(geo => {
                            // this.$router.push('/map');
                            this.searchContainer = false;
                            this.showPathOnMap(geo.data);
                            var self = this;
                            setTimeout(function(){
                                self.$refs.leafletMap.map.invalidateSize(true);
                            },10)
                        })
                    }
                })
            },
            switchMode: function(domObj, type) {
                document.querySelectorAll('.searchType span').forEach(d => {
                    d.classList.remove('select');
                })
                domObj.classList.add('select');
                if(type === 'search'){
                    this.$router.push('/map/point' + '?id=' + 6101000094 + '&type=' + this.searchType);
                }
            },
            showPathOnMap: function(data) {
                let mapObj = this.$refs.leafletMap.map;
                data.forEach(line => {
                    let geoJson = util.wktToGeojson(line.geometry);
                    const feature = {
                        type: 'Feature',
                        properties: {
                            id: line.link_id
                        },
                        geometry: geoJson
                    }
                    const style = {
                        style: {
                            color: '#f00',
                            fill: true,
                            fillColor: '#f00',
                            strokeColor: '#f00',
                            fillOpacity: 0.2
                        }
                    };
                    const path = L.geoJSON(feature, style);
                    path.addTo(mapObj);
                })
                /* mapObj.fitBounds(path.getBounds());
                let startPoint = geoJson.coordinates[0].reverse(), 
                    endPoint = geoJson.coordinates[geoJson.coordinates.length-1].reverse();
                var popup = L.popup().setLatLng(startPoint).setContent('<p>起点</p>').openOn(mapObj);
                var popup = L.popup().setLatLng(endPoint).setContent('<p>终点</p>').openOn(mapObj); */
            }
        }
    };
</script>

<style scoped>
    .searchContainer {
        width: 100%;
        height: 100%;
        padding-top: 0.3em;
        font-size: 1em;
        background-color: #26a2ff26;
        box-sizing: border-box;
        position: absolute;
    }
    .searchContainer ul{
        margin: 0px;
        padding: 0px;
    }
    .searchContainer input {
        width: 99%;
        box-sizing: border-box;
        margin: 0.5%;
        height: 30px;
    }
    .searchContainer .searchPanel {
        background-color: white;
        padding: 0.3em 0.2em;
        box-shadow: 0px 4px 7px #ccc;
        width: 96%;
        margin: 0 auto;
        border-radius: 4px;
        height: 4.3em;
    }
    .searchContainer .searchType {
        background-color: white;
        width: 96%;
        margin: 0.5em auto;
        border-radius: 4px;
        box-shadow: 0px 4px 7px #ccc;
    }
    .searchContainer .searchType span{
        width: 50%;
        display: inline-block;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
        padding: 0.2em 0.1em;
        border: none;
    }
    .searchContainer .select {
        background-color: rgba(38,162,255,0.77);
        box-shadow: 0px 1px 10px #6cb4ea;
    }
    .searchContainer .resultPanel {
        background-color: white;
        width: 94%;
        margin: auto;
        height: calc(100% - 8.5em);
        border-radius: 4px;
        padding: 0.2em;
        cursor: pointer;
        overflow: scroll;
    }
    .searchContainer .resultPanel ul li {
        list-style: none;
        padding: 5px 14px;
    }
    .mapContainer {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
        top:0
    }
</style>
