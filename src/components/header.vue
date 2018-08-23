<template>
  <mt-header :title="title">
    <router-link to="/" slot="left">
      <mt-button icon="back">{{$route.query.name}}</mt-button>
    </router-link>
  </mt-header>
</template>

<script>
export default {
  name: 'appHeader',
  props: {},
  data() {
    return {
      title: this.$route.path==='/map/info' ? '详情页' : this.$route.path==='/map/point' ? '地图选点': '详情页'
    }
  },
  methods: {},
  mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
