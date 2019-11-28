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

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.utils = utils

// 路由守卫配合vuex使用
// router.beforeEach((to,from,next) => {
//   if(store.state.userInfo || to.path === '/'){
//     next()
//   }else{
//     next({
//       path:'/'
//     })
//   }   
// })

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
