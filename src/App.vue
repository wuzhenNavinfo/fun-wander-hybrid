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
  font-family: 'Source Han Sans SC','PingFangSC-Medium','Microsoft YaHei','微软雅黑';
  width: 100%;
  height: 100%;
}

.div-icon {
  font-family: 'Source Han Sans SC','PingFangSC-Medium','Microsoft YaHei','微软雅黑';
  text-align: center;
  color:#665c59;
}
/** 设置选择启终点按钮样式 */
.start_end_btn {
  font-size: 10px;
  border-radius: 15px;
}
</style>
