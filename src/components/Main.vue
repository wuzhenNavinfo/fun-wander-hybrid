<template>
    <div class="container">
        <app-header></app-header>
        <leaflet-map></leaflet-map>
        <router-view></router-view>
    </div>
</template>

<script>
    import L from 'leaflet'
    import events from '@/utils/events'
    import appHeader from '@/components/header'
    import leafletMap from './LeafletMap.vue'

    export default {
        name: 'Main',
        components: {
            appHeader,
            leafletMap
        },
        data: function () {
            return {
                building: null,
                map: null,
                layers: [],
            }
        },
        mounted: function () {
//            if (this.$route.path === '/main/info') {
//                this.building = {};
//                this.building.id = this.$route.query.id;
//                this.building.name = this.$route.query.name;
//                return;
//            }
        },
        destroyed() {
        },
        methods: {

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