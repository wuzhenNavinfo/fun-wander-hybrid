<template>
    <div id='mineMap' class='map-container'>
    </div>
</template>

<script>
    minemap.domainUrl = 'http://139.199.20.29'
    minemap.serviceUrl = 'http://139.199.20.29/service'
    minemap.spriteUrl = 'http://139.199.20.29/app/images/map/sprite'
    minemap.accessToken = '6cbcf83014ca4d2abbe758e02c9e3dbe'

    export default {
        name: 'MineMap',
        props: {},
        mounted: function() {
            this.createMap();
        },
        methods: {
            createMap: function() {                
                minemap.solution = 4791
                const map = new minemap.Map({
                    container: 'mineMap',
                    style: 'http://139.199.20.29/service/solu/style/id/4791',
                    minZoon: 3,
                    maxZoom: 24,
                    zoom: 16,
                    center: [108.94400235446722, 34.300590391379714]
                });
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
</style>
