<template>
    <div class="container">
        <mt-header :title="$route.query.name">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <leaflet-map show-center-point='0'></leaflet-map>
        <building-info></building-info>
    </div>
</template>

<script>
    import L from 'leaflet'
    import events from '@/utils/events'
    import leafletMap from './LeafletMap.vue'
    import buildingInfo from './BuildingInfo.vue'

    export default {
        name: 'SelectInfo',
        components: {
            leafletMap,
            buildingInfo
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