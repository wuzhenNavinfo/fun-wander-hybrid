import VueRouter from 'vue-router';

import buildingInfos from '../components/buildingInfos.vue';
import areaDataList from '../components/areaDataList.vue';
import MapBoxMap from '../components/MapBoxMap.vue';
import LeafletMap from '../components/LeafletMap.vue';
import MineMap from '../components/MineMap.vue';
import BuildingList from '../components/BuildingList.vue';

const routes = [
  { path: '/', component: BuildingList },
  { path: '/map', component: LeafletMap,
    children: [
      {
        path: 'info',
        component: buildingInfos
      },
      {
        path: 'point',
        component: areaDataList
      }
    ]
  },
  { path: '/mapbox', component: MapBoxMap },
  { path: '/minmap', component: MineMap }
];

export default new VueRouter({
  routes
});
