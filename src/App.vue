<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router/router.js'

export default {
  name: 'app',
  router
};
</script>

<style>
#app {
  font-family: 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  width: 100%;
  height: 100%;
}

.div-icon {
  text-align: center;
}
</style>
