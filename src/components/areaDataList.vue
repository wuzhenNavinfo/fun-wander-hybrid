<template>
  <div class="areaDataList">
    <div v-for="item in areaList" :key="item.id" @click.stop="selectPoint(item)">
      <mt-cell :title="item.properties.name" :label="item.properties.name">
        <mt-button type="primary" size="small">设为终点</mt-button>
      </mt-cell>
    </div>
  </div>
</template>

<script>
import events from '@/utils/events'
export default {
  name: 'areaDataList',
  props: {},
  data() {
    return {
      areaList: []
    }
  },
  methods: {
    selectPoint(eData) {
      console.log(eData);
    }
  },
  mounted() {
    this.$bus.$on(events.GETNEARPOINTS, data => {
      this.areaList = data;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .areaDataList {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    z-index: 1000;
    background: #fff;
    overflow: auto;
  }
</style>
