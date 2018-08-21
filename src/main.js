import Vue from 'vue'
import Mint from 'mint-ui'
import VueRouter from 'vue-router'
import 'mint-ui/lib/style.css'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Mint)

Vue.use(VueRouter)

new Vue({
    render: h => h(App)
}).$mount('#app')
