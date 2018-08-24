<template>
    <div>
        <div class="searchContainer" v-show="searchContainer">
            <div class="searchPanel">
                <div><input type="input" v-model="startPlace" placeholder="输入起点" v-on:input="queryPlace('start')"/></div>
                <div><input type="input" v-model="endPlace" placeholder="输入终点" v-on:input="queryPlace('end')"/></div>
            </div>
            <div class="searchType">
                <span v-on:click="switchMode($event.target, 'name')">名称搜索</span>
                <span v-on:click="switchMode($event.target, 'search')">地图选点</span>
            </div>
            <div class="resultPanel">
                <ul>
                    <li v-for="place in placeList" v-on:click="selectPlace(place)">{{place.name}}</li>
                </ul>
            </div>
        </div>
        <div id="leafletMap" class="map-container"></div>
    </div>
    
</template>

<script>
    import L from 'leaflet';
    import util from '../utils/util'
    import LeafletMap from './LeafletMap.vue';
    import ajax from '../utils/ajax';

    export default {
        name: 'PlaceSearch',
        props: {},
        data() {
            return {
                placeList: [],
                searchType: 'start',
                startPlace: '',
                endPlace: '',
                searchContainer: true
            }
        },
        mounted: function() {
            this.switchMode(document.querySelectorAll('.searchType span')[0], 'name');
        },
        methods: {
            queryPlace: function(type) {
                let searchName = this.startPlace;
                if(type === 'end'){
                    searchName = this.endPlace;
                }
                if(searchName === '') {
                    this.placeList = [];
                    return;
                }
                this.searchType = type;
                var param = {
                    // buildingId: 6101000094,
                    buildingId: this.$route.query.id,
                    tip: searchName
                };
                ajax.get(`/indoor/building/search/poi/`, param).then(res => {
                    if(res.data && res.data.length !== 0){
                        this.placeList = res.data;
                    }else{
                        this.placeList = [];
                    }
                })
            },
            selectPlace: function(place) {
                if(this.searchType === 'start') {
                    this.startPlace = place.name;
                } else {
                    this.endPlace = place.name;
                }

                if(this.startPlace !== '' &&this.endPlace !== '') {
                    /* ajax.get().then(geo => {

                    }) */
                    this.$router.push('/map');
                    this.showPathOnMap();
                }
            },
            switchMode: function(domObj, type) {
                document.querySelectorAll('.searchType span').forEach(d => {
                    d.classList.remove('select');
                })
                domObj.classList.add('select');
            },
            showPathOnMap: function() {
                var latlngs = [
                    [40, 114],
                    [43.2, 119],
                    [38.3, 128]
                ];
                var lineLaye = new L.Polyline(latlngs, {
                    color:'#f00',
                    weight:2
                });
                setTimeout(function() {
                    LeafletMap.methods.getMapObj().addLayer(lineLaye);
                })
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
        background-color: #eee;
        box-sizing: border-box;
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
        background-color: #eee;
        box-shadow: 0px 2px 5px #999;
        font-weight: bold;
    }
    .searchContainer .resultPanel {
        background-color: white;
        width: 94%;
        margin: auto;
        height: calc(100% - 8.5em);
        border-radius: 4px;
        padding: 0.2em;
        cursor: pointer;
    }
    .searchContainer .resultPanel ul li {
        list-style: none;
        padding: 5px 14px;
    }
    .map-container {
        width: 100%;
        height: 100%;
    }
</style>
