import VueRouter from 'vue-router';

// import HelloWorld from '../components/HelloWorld.vue';
import MapBoxMap from '../components/MapBoxMap.vue';
import LeafletMap from '../components/LeafletMap.vue';
import MineMap from '../components/MineMap.vue';
import BuildingList from '../components/BuildingList.vue';

const routes = [
  // { path: '/', component: HelloWorld },
  { path: '/', component: BuildingList },
  { path: '/map', component: LeafletMap },
  { path: '/mapbox', component: MapBoxMap },
  { path: '/minmap', component: MineMap }
];

export default new VueRouter({
  routes
});
