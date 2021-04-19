import Vue from 'vue'
import App from './App'
import wLoading from '@/components/w-loading/w-loading.vue'

Vue.component("w-loading",wLoading)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
