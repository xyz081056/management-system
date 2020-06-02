// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import utils from '@/util/util.js'

import { getRequest } from './util/api'
import { postRequest } from './util/api'
import { postRequestLogin } from './util/api'
import { deleteRequest } from './util/api'
import { putRequest } from './util/api'
import { ajaxRequest } from './util/api'
import axios from 'axios'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.utils = utils
Vue.prototype.$axios = axios
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.postRequestLogin = postRequestLogin;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.ajaxRequest = ajaxRequest;

// 路由守卫配合vuex使用
router.beforeEach((to,from,next) => {
  if(store.state.userInfo || to.path === '/'){
    next()
  }else{
    next({
      path:'/'
    })
  }   
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  computed:{
    login(){
      return this.$store.state.userInfo
    }
  }
})
