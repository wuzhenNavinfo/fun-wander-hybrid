<template>
  <div id="app">
    <LeafletMap/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MapBoxMap from './components/MapBoxMap.vue'
import LeafletMap from './components/LeafletMap.vue'
import MineMap from './components/MineMap.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    MapBoxMap,
    LeafletMap,
    MineMap
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  width: 100%;
  height: 100%;
}
</style>
