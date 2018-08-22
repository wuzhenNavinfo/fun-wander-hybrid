<template>
  <div class="areaDataList">
    <h1>111111111111111111</h1>
  </div>
</template>

<script>
import events from '@/utils/events'
export default {
  name: 'areaDataList',
  props: {
    areaList: Array,
    default: []
  },
  data() {
    return {

    }
  },
  methods: {
    log() {
      console.log(1211111111111);
    }
  },
  mounted() {
    this.$bus.$on(events.GETNEARPOINTS, data => {
      console.log(data);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .areaDataList {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 200px;
    z-index: 1000;
    background: red;
  }
</style>
