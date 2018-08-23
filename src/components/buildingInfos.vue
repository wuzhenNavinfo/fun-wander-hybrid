<template>
  <div class="footer">
    <div class="title" @click="openSelectPanel();">
      <i class="mintui mintui-search"></i>
      <span class="name">选择楼层</span>
    </div>
    <div class="content" v-show="openSelectPanelFlag">
      <div v-for="item in flowInfo" @click="selectFloor(item)">
        <mt-cell v-if="item.properties.id==selectedFloor.properties.id" icon="success" :title="item.properties.name" :label="item.properties.infor"></mt-cell>
        <mt-cell v-if="item.properties.id!=selectedFloor.properties.id" :title="item.properties.name" :label="item.properties.infor"></mt-cell>
      </div>
    </div>
  </div>
</template>

<script>
  import events from '@/utils/events';
  import ajax from '@/utils/ajax';
  import util from '@/utils/util'
  export default {
    name: 'buildingInfos',
    props: {},
    data() {
      return {
        currentBuliding: {},
        flowInfo: [],
        selectedFloor: null,
        openSelectPanelFlag: true
      }
    },
    methods: {
      openSelectPanel() { // 打开选择楼层的面板
        this.openSelectPanelFlag = !this.openSelectPanelFlag;
      },
      selectFloor(item) { // 选择楼层
        this.flowInfo.forEach(item => {
          item.selected = false;
        });
        this.selectedFloor = item;
        this.$bus.$emit(events.FLOORCHANGING, item.properties.id);
      },

      loadFloorByBuilding: function (buildingId) {
        return ajax.get(`/indoor/building/floor/${buildingId}`).then(res => {
          if (res && res.data && res.data.length > 0) {
            return res.data.map(it => {
              const geom = util.wktToGeojson(it.geometry)
              return {
                type: 'Feature',
                properties: {
                  id: it.fl_id,
                  infor: it.fl_infor,
                  name: it.fl_name,
                  num: it.fl_num,
                },
                geometry: geom
              }
            })
          } else {
            return null
          }
        }).catch(err => {
          console.error(err);
          return null
        })
      },
    },
    mounted() {
      this.loadFloorByBuilding(this.$route.query.id).then(res => {
          this.flowInfo = res;
          this.selectedFloor = res[0];
          // 默认加载第一层的信息
          this.$bus.$emit(events.FLOORCHANGING, res[0].properties.id);
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    position: absolute;
    width: 100%;
    z-index: 999;
    left: 0px;
    bottom: 0px;
  }

  .footer .title {
    padding: 10px;
    background-color: #c3c3c3;
  }

  .footer .content {
    height: 150px;
    max-height: 150px;
    background-color: #ffffff;
    overflow: auto;
  }

  .footer .name {
    margin-left: 6px;
  }
</style>