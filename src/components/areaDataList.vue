<template>
  <div class="areaDataList">
    <div v-for="item in areaList" @click.stop="selectPoint(item)">
      <mt-cell :title="item" :label="item">
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
      areaList: [],
      temp: true,
    }
  },
  methods: {
      selectPoint(eData) {
        console.log(eData);
      },
      loadNearPoint() {
          // 根据当前点位查询poi列表
          var a1 = ['耐克','阿迪达斯','美津浓','彪马','安踏'];
          var a2 = ['艾格Etam', '鸿韵莱', 'Only', 'TAHAN', '斯尔丽SIERLI'];
          if (this.temp) {
              this.areaList = a1;
          } else {
              this.areaList = a2;
          }
          this.temp = !this.temp;
      }
  },
  mounted() {
      this.loadNearPoint();
      this.$bus.$on(events.GETNEARPOINTS, data => {
          this.loadNearPoint();
      });
  },
    destroyed() {
        this.$bus.$off(events.GETNEARPOINTS);
    },
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
