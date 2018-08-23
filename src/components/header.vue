<template>
  <div class="header">
      <div class="back" @click="goBack();">
        <i class="mintui mintui-back"></i>
        <span class="name">{{$route.query.name}}</span>
      </div>
      <div class="title">{{$route.path==='/map/info' ? '详情页' : $route.path==='/map/point' ? '地图选点': '详情页'}}</div>
  </div>
</template>

<script>
export default {
  name: 'appHeader',
  props: {},
  data() {
    return {}
  },
  methods: {
    // 返回方法
    goBack: function () {
      this.$router.push('/');
    },
  },
  mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
        position: absolute;
        width: 100%;
        z-index: 999;
        background-color: #c3c3c3;
        height: 40px;
        opacity: 1;
        top: 0px;
        left: 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .header > div {
      flex: 1;
    }
    .header .back {
      background-color: #c3c3c3;
    }
    .header .title {
      color: #15a8eb;
    }
</style>
