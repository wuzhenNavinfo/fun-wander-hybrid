<template>
    <div class="footer">
        <div class="title" @click="openSelectPanel();">
            <i class="left-image">
                <img v-if="!openSelectPanelFlag" src="../assets/slideUp.png"/>
                <img v-if="openSelectPanelFlag" src="../assets/slideDown.png"/>
            </i>
            <span v-if="selectedFloor && selectedFloor.properties" class="name">
                {{selectedFloor.properties.name}}--{{selectedFloor.properties.infor}}
            </span>
            <mt-button class="right-button" type="danger" size="small" @click.stop="openFloor(0);" >楼 层</mt-button>
        </div>
        <div class="content" v-show="openSelectPanelFlag">
            <div v-for="item in flowInfo" @click="selectFloor(item)">
                <mt-cell v-if="item.properties.id==selectedFloor.properties.id" icon="success" :title="item.properties.name" :label="item.properties.infor"></mt-cell>
                <mt-cell v-if="item.properties.id!=selectedFloor.properties.id" :title="item.properties.name" :label="item.properties.infor"></mt-cell>
            </div>
        </div>
        <div class="footer" v-if="selectedPoi">
            <div class="poi-detail">
                <div class="waper">
                    <div v-if="selectedPoi">{{selectedPoi.name}}</div>
                    <div v-if="selectedPoi && selectedPoi.address">{{selectedPoi.address}}</div>
                    <div v-if="selectedPoi && !selectedPoi.address">地址(空)</div>
                </div>
                <div class="right-waper">
                    <mt-button type="primary" size="small">路 线</mt-button>
                    <mt-button style="margin-left: 10px;" type="danger" size="small" @click="openFloor(1);" >楼 层</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import events from '@/utils/events';
  import ajax from '@/utils/ajax';
  import util from '@/utils/util'
  import MtButton from "../../node_modules/mint-ui/packages/button/src/button.vue";
  export default {
      components: {MtButton},
      name: 'buildingInfos',
    props: {},
    data() {
      return {
          currentBuliding: {},
          flowInfo: [],
          selectedFloor: null,
          openSelectPanelFlag: false,
          selectedPoi: null
      }
    },
    methods: {
      openFloor(flag) {
          if (flag == 1) {
              this.selectedPoi = null;
              this.openSelectPanelFlag = true;
          }
          // alert('路由');
      },
      openSelectPanel() { // 打开选择楼层的面板
        this.openSelectPanelFlag = !this.openSelectPanelFlag;
      },
      selectFloor(item) { // 选择楼层
          if (item.properties.id == this.selectedFloor.properties.id) {
              return;
          }

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
        loadPoiById: function (id) {
            return ajax.get(`/indoor/building/poi/${id}`).then(res => {
                if (res && res.data && res.data.length > 0) {
                    return res.data.map(it => {
                        return {
                            id: it.poi_id,
                            address: it.address,
                            name: it.name,
                            faceId: it.face_id
                        }
                    });
                } else {
                    return null
                }
            }).catch(err => {
                return null
            })
        }
    },
    mounted() {
        var that = this;
      this.loadFloorByBuilding(this.$route.query.id).then(res => {
          this.flowInfo = res;
          this.selectedFloor = res[0];
          // 默认加载第一层的信息
          this.$bus.$emit(events.FLOORCHANGING, res[0].properties.id);
      });

      this.$bus.$on(events.SELECTPOI, function (feature) {
          that.loadPoiById(feature.properties.id).then(poi => {
              if (poi) {
                  that.selectedPoi = poi[0];
                  that.openSelectPanelFlag = false;
              }
          })
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
      background-color: #26a2ff;
      color: #fff;
      font-size: 14px;
  }
  .footer .title .right-button {
      float: right;
      padding: 1px 20px;
      height: 22px;
      line-height: 22px;
  }

  .footer .left-image img {
      width: 20px;
      height: 20px;
      vertical-align: bottom;
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

    .footer .poi-detail{
        background-color: white;
        display: flex;
    }
    .footer .poi-detail .waper{
        flex: 1;
    }
  .footer .poi-detail .waper > div{
      padding: 4px 20px;
      font-size: 14px;
  }
  .footer .poi-detail .right-waper{
      padding: 12px;
  }

</style>