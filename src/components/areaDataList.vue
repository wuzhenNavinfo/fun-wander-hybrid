<template>
  <div class="areaDataList">
    <div v-for="item in areaList" :key="item.id" @click.stop="selectList(item)">
      <mt-cell :title="item.properties.name" :label="`${$route.query.name}--${item.properties.name}`">
        <mt-button type="primary" class="start_end_btn" size="small" @click.stop="selectPoint(item)">{{pointType}}</mt-button>
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
  computed: {
    pointType: function() {
      if (this.$route.query.selectType) {
        return this.$route.query.selectType === 'start' ? '设为起点' : '设为终点';
      }
      return '设为起点';
    }
  },
  methods: {
    selectList(eData) {
      this.$bus.emit(events.SELECTSTARTANDEND, eData.geometry);
    },
    selectPoint(eData) {
      // 通过跳转路由来实现;
    }
  },
  mounted() {
    this.$bus.on(events.GETNEARPOINTS, data => {
      this.areaList = data;
    });
  },
  destroyed() {
    this.$bus.off(events.GETNEARPOINTS);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .areaDataList {
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 200px;
    z-index: 1000;
    background: #fff;
    overflow: auto;
  }
  .areaDataList > div {
    border-bottom: 1px solid #eee;
  }
</style>
