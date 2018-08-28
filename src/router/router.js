import VueRouter from 'vue-router';

// import areaDataList from '../components/areaDataList.vue';
import MapBoxMap from '../components/MapBoxMap.vue';
import LeafletMap from '../components/LeafletMap.vue';
import MineMap from '../components/MineMap.vue';
import BuildingList from '../components/BuildingList.vue';
import PlaceSearch from '../components/PlaceSearch.vue';
import SelectInfo from '../components/SelectInfo.vue';
import PointInfo from '../components/PointInfo.vue';
// import BuildingInfo from '../components/BuildingInfo.vue';

const routes = [
  { path: '/', component: BuildingList },
  { path: '/selectInfo', component: SelectInfo },
  { path: '/pointInfo', component: PointInfo },
  // { path: '/main', component: Main,
  //     children: [
  //         { path: 'info', component: BuildingInfo },
  //         {
  //             path: 'point',
  //             component: areaDataList
  //         }
  //     ]
  // },
  { path: '/map', component: LeafletMap },
  { path: '/mapbox', component: MapBoxMap },
  { path: '/minmap', component: MineMap },
  { path: '/search', component: PlaceSearch }
];

export default new VueRouter({
  routes
});
