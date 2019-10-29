import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import repassword from '@/components/repassword'
import adminHome from '@/components/admin/home'
import userHome from '@/components/user/home'
import baseInfo from '@/components/admin/baseInfo'
import course from '@/components/admin/course'
import count from '@/components/admin/count'

// 待解决问题 1、路由跳转过程中要对参数进行加密
// 待解决问题 2、路由拦截，必须经过登录才能实现页面的访问 
// 待解决问题 3、登录和修改密码空白时，不会报错
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
          component:baseInfo,
          meta: {
            keepAlive: true,//防止数据刷新后丢失
            requireAuth: true,
          }
        },
        {
          path:'/admin/course',
          name:'课程安排',
          component:course
        },
        {
          path:'/admin/count',
          name:'账号管理',
          component:count
        },
      ]
    },
    {
      path:'/userHome',
      name:'用户端',
      component:userHome
    },
  ],
  mode:"history" //去掉hash模式，换用history
})
// 解决路由报错
  const originalPush = Router.prototype.push;
  Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
    };
