const eventController = function (Vue) {
  const Bus = new Vue({
    methods: {
      /**
       * 代理vue$emit事件
       * @param {*} event 
       * @param {*} args 
       */
      emit (event, ...args) {
        this.$emit(event, ...args);
      },
      /**
       * 代理vue$on事件
       * @param {*} event 
       * @param {*} callback 
       */
      on (event, callback) {
        this.$on(event, callback);
      },
       /**
       * 代理vue$off事件
       * @param {*} event 
       * @param {*} callback 
       */
      off (event, callback) {
        this.$off(event, callback);
      }
    }
  });
  Vue.prototype.$bus = Bus;
}

export default eventController;