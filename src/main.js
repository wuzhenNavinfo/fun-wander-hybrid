import Vue from 'vue'
import Mint from 'mint-ui'
import VueRouter from 'vue-router'
import 'mint-ui/lib/style.css'

import App from './App.vue'
import vueBus from '@/utils/vue-bus'

Vue.config.productionTip = false

Vue.use(Mint)
// 增加一个vuebus作为数据传递总线，解决各级别组件传递数据的问题;
Vue.use(vueBus)

Vue.use(VueRouter)

Vue.prototype.globalData = {};// 用于存储全局变量
Vue.prototype.globalData = { // 临时构造假数据
    "currentBuilding": {
        "id": "6101000094",
        "name": "荣民龙首广场"
    },
    "currentFloorId": "61010000941001",
    "zoom": 19
};

new Vue({
    render: h => h(App)
}).$mount('#app')
