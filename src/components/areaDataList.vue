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
import L from 'leaflet'
import ajax from '../utils/ajax'
import util from '../utils/util'

export default {
  name: 'areaDataList',
  props: {},
  data() {
    return {
      areaList: [],
      temp: true,
    }
  },
  computed: {
    pointType: function() {
      if (this.$route.query.type) {
        return this.$route.query.type === 'start' ? '设为起点' : '设为终点';
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
      },
      loadAreaLists(location) {
          let radius = 15; // 搜索半径;
          return this.loadAreaPoints(61010000941002).then(res => {
              let result = res.map(item => {
                  console.info(item);
                  const tmpLatLng = L.latLng(...item.geometry.coordinates.reverse());
                  item.distance = location.distanceTo(tmpLatLng);
                  return item;
              });
              return result.sort((a,b) => a.distance - b.distance).filter(item => item.distance < radius);
          });
      },
      loadAreaPoints: function(floorId) {
          return ajax.get(`/indoor/building/floor/poi/${floorId}`).then(res => {
              let feature = {};
              if (res && res.data && res.data.length > 0) {
                  feature = res.data.map(it => {
                      const geom = util.wktToGeojson(it.geometry)
                      return {
                          type: 'Feature',
                          properties: {
                              id: it.poi_id,
                              kind: it.kind,
                              name: it.name,
                              faceId: it.face_id,
                          },
                          geometry: geom
                      }
                  });

              }
              return feature;
          });
      },
  },

  mounted() {
    this.$bus.on(events.GETNEARPOINTS, (data) => {

        if (!data.currentLocation) {
            return;
        }
        this.loadAreaLists(data.currentLocation).then(result => {
            this.areaList = result;
        })
    });
  },

  destroyed() {
    this.$bus.$off(events.GETNEARPOINTS);
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
