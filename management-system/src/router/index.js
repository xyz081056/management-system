import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import repassword from '@/components/repassword'
import adminHome from '@/components/admin/home'
import userHome from '@/components/user/home'
import baseInfo from '@/components/admin/baseInfo'

Vue.use(Router)

export default new Router({
  routes: [
    //登录
    {
      path: '/login',
      component:login,
    },
    //重定向
    {
      path: '/',
      redirect:'/login'
    },
    // 修改密码
    {
      path: '/repassword',
      component: repassword
    },
    {
      path:'/adminHome',
      name:'管理员端',
      component:adminHome,
      redirect:'/admin/baseInfo',
      children:[
        {
          path:'/admin/baseInfo',
          name:'基本资料',
          component:baseInfo
        },
        // {
        //   path: '/baseInfo',
        //   redirect:'/admin/baseInfo'
        // },
      ]
    },
    {
      path:'/userHome',
      name:'用户端',
      component:userHome
    },
  ],
  mode:"history" 
})
