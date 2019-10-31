import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import repassword from '@/components/repassword'
import adminHome from '@/components/admin/home'
import userHome from '@/components/user/home'
import baseInfo from '@/components/admin/baseInfo'
import course from '@/components/admin/course'
import count from '@/components/admin/count'
import active from '@/components/admin/active'
import message from '@/components/admin/message'
import userbaseInfo from '@/components/user/baseInfo'
import userCourse from '@/components/user/course'
import userActive from '@/components/user/active'
import teachAppraise from '@/components/user/teachAppraise'
import trade from '@/components/user/trade'
import partTimeJob from '@/components/user/partTimeJob'
import userMessage from '@/components/user/message'


// 待解决问题 1、路由跳转过程中要对参数进行加密
// 待解决问题 2、路由拦截，必须经过登录才能实现页面的访问 
// 待解决问题 3、登录和修改密码空白时，不会报错
// 待解决问题 4、边输入边搜索、增加、删除、修改功能
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
          name:'学生信息',
          component:count
        },
        {
          path:'/admin/active',
          name:'院系活动',
          component:active
        },
        {
          path:'/admin/message',
          name:'消息管理',
          component:message
        },
      ]
    },
    {
      path:'/userHome',
      name:'用户端',
      component:userHome,
      redirect:'/user/baseInfo',
      children:[
        {
          path:'/user/baseInfo',
          name:'个人资料',
          component:userbaseInfo,
          meta: {
            keepAlive: true,//防止数据刷新后丢失
            requireAuth: true,
          }
        },
        {
          path:'/user/course',
          name:'课表安排',
          component:userCourse
        },
        {
          path:'/user/active',
          name:'学院活动',
          component:userActive
        },
        {
          path:'/user/teachAppraise',
          name:'教师评价',
          component:teachAppraise
        },{
          path:'/user/trade',
          name:'闲置交易',
          component:trade
        },{
          path:'/user/part-time',
          name:'学生兼职',
          component:partTimeJob
        },
        {
          path:'/user/message',
          name:'消息通知',
          component:userMessage
        },
        
      ]
    },
  ],
  mode:"history" //去掉hash模式，换用history
})
// 解决路由报错
  const originalPush = Router.prototype.push;
  Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
    };
