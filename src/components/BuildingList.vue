<template>

	<div id="shop" class="BuildingList">
    <img class="imglogo" src="/images/logo.png"  width="45" height="50" >
        <div v-for="item in buildings" @click="toMap(item);">

          <mt-header fixed title="商 场 列 表"></mt-header>

            <mt-cell :title="item.name" :label="item.address" is-link></mt-cell>
        </div>
	</div>  	
</template>

<script>
import ajax from '../utils/ajax';
import util from '../utils/util';
import { Header } from 'mint-ui';


export default {
  name: 'HelloWorld',
  data: function() {
    return {
      buildings: []
    };
  },
  props: {},
  mounted: function() {
    name: 'shop';
    const that = this;
    this.loadBuilding().then(data => {
      if (data) {
        that.buildings = data;
      }
    });
  },
  methods: {
    toMap: function (item) {
        this.$router.push({path:'/selectInfo' , query: {id: item.building_id, name: item.name}})
        this.globalData.currentBuilding = {
            id: item.building_id,
            name: item.name
        };
    },

    loadBuilding: function(buildingId) {
      return ajax
        .get('/indoor/building')
        .then(res => {
          if (res && res.data) {
            return res.data
          } else {
            return null;
          }
        })
        .catch(err => {
          console.error(err);
          return null;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .BuildingList{
      margin:39px 0 0 60px;
    }
  .imglogo{
    position: absolute;
      left: 10px;
      top:45px; 
  }
  /* .imglogo2{
    position: absolute;
      left: 10px;
      top:50px; 
  } */
</style>
