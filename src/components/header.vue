<template>
  <div class="header">
      <div class="title" @click="goBack();">
          <i class="mintui mintui-back"></i>
          <span class="name">{{currentBuliding.name}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'header',
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
        opacity: 1;
        top: 0px;
        left: 0px;
    }
    .header .title {
        padding: 10px;
        background-color: #c3c3c3;
    }
    .header .name {
        margin-left: 6px;
    }
</style>
