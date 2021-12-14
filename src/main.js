import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueKakaoSdk from 'vue-kakao-sdk'
import dotenv from 'dotenv';

Vue.config.productionTip = false

dotenv.config()
const apiKey = process.env.VUE_APP_SDK_KEY
Vue.use( VueKakaoSdk, { apiKey } )

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
