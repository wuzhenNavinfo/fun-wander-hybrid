<template>
  <div id="app">
    <MainMap/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainMap from './components/MainMap.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    MainMap
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
