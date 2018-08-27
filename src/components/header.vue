<template>
  <mt-header :title="$route.query.name">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>
</template>

<script>
export default {
  name: 'appHeader',
  props: {},
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
