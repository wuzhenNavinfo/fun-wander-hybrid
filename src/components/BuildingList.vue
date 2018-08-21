<template>
	<div>
		<mt-cell v-for="item in buildings" :title="item.name" :label="item.address" to="/map" is-link></mt-cell>
	</div>  	
</template>

<script>
import ajax from '../utils/ajax';
import util from '../utils/util';

export default {
  name: 'HelloWorld',
  data: function() {
    return {
      buildings: []
    };
  },
  props: {},
  mounted: function() {
    const that = this;
    this.loadBuilding().then(data => {
      if (data) {
        that.buildings = data;
      }
    });
  },
  methods: {
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
</style>
