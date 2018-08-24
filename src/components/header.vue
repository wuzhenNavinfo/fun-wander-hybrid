<template>
  <mt-header :title="title">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>
</template>

<script>
export default {
  name: 'appHeader',
  props: {},
  data() {
    return {
        title: null
      // title: this.$route.path==='/map/info' ? '详情页' : this.$route.path==='/map/point' ? '地图选点': '详情页'
    }
  },
  methods: {},
  mounted() {
      this.title = this.$route.query.name;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
