<template>
    <div class="adminhome">
       <el-container class="home-container">
            <el-header class="home-header" height="50px" width="100%">
                <img src="../../assets/logo.jpg" style="height:50px;width:50px;border-radius: 50%;margin-left:80px">
                <i class="el-icon-user-solid" style="margin-left:40px">
                    <router-link to="/" style="color:white;text-decoration:none">重新登录</router-link>
                </i>
                <i class="el-icon-edit">
                    <router-link to="/repassword" style="color:white;text-decoration:none">修改密码</router-link>
                </i>
                <i class="el-icon-smile">🙂听风的鱼</i>
                <i class="el-icon-date" align="right" style="margin-right:40px">
                        今天是: {{today}}
                </i>
            </el-header>
            <el-container>
                <el-aside width="230px" class="home-aside" >
                <!-- 写死的菜单栏 -->
                <div>
                    <el-menu router
                    default-active="1"
                    background-color="#fffafa">
                        <el-menu-item index="/admin/baseInfo" style="margin-top:35px">
                            <i class="el-icon-user"></i>
                            <span slot="title">基本资料</span>
                        </el-menu-item>
                        <el-menu-item index="/admin/course">
                            <i class="el-icon-reading"></i>
                            <span slot="title">课程管理</span>
                        </el-menu-item>
                        <el-menu-item index="/admin/count">
                            <i class="el-icon-setting"></i>
                            <span slot="title">学生信息</span>
                        </el-menu-item>
                        <el-menu-item index="/admin/active">
                            <i class="el-icon-baseball"></i>
                            <span slot="title">活动管理</span>
                        </el-menu-item>
                        <el-menu-item index="/admin/message">
                            <i class="el-icon-message"></i>
                            <span slot="title"> 
                                消息管理        
                                <el-badge :value="number" v-if="flg">
                                </el-badge>          
                            </span>
                        </el-menu-item>
                    </el-menu>
                </div>
                </el-aside>
            <el-container>
                <el-main>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/Home' }">当前位置</el-breadcrumb-item>
                        <el-breadcrumb-item v-text="this.$router.currentRoute.name"></el-breadcrumb-item>
                    </el-breadcrumb>
                    <!-- keep-alive可以防止当回到该页面时传入的数据丢失的问题 -->
                    <keep-alive>
                        <router-view v-if="this.$route.meta.keepAlive"></router-view>
                    </keep-alive>
                    <!-- 下面这个router-view是切换的模块区域，且给加了动画 -->
                    <transition mode="out-in">
                        <router-view v-if="!this.$route.meta.keepAlive"></router-view>
                    </transition>
                </el-main>
            </el-container>
            </el-container>
        </el-container>
     </div>
   </template>

<script>
export default {
  data(){
    return{
      tableData:'',
      number:'1',
      flg:false,
    }
  },
   computed: {
      today() {
        var date = new Date()
        var seperator1 = '-'
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var strDate = date.getDate()
        var week = date.getDay() 
        if (month >= 1 && month <= 9) {
            month = '0' + month
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = '0' + strDate
        }
        var weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        var currentdate = year + seperator1 + month + seperator1 + strDate + '  ' + weekday[week]
        return currentdate 
    },
   },
   mounted(){
      this.get()
      this.num()
   },
   methods:{
    get(){
      this.tableData = this.$route.query
      console.log(this.tableData)
    },
    num(){
        if(this.number > 0){
            this.flg  = true
        }
    }
  },
}
</script>

<style lang="stylus" scoped>    
.home-container {
    height: 98%;
    position: absolute;
    top: 2px;
    left: 10px;
    width: 98%;
  }
  .home-aside {
    background-color: #fffafa;
    border-radius: 5px;
    margin-top:4px;
    border-right #ffffff 1px solid 
  }
  .home-header {
    background-color:black;
    color:whitesmoke;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: content-box;
    padding: 0px;
    border-radius: 5px;
    position: relative;
    top:0px;
  }
  .home-main {
    background-color: #fff;
    color: #000;
    text-align: center;
    margin: 0px;
    padding: 0px;
  }
  /* 给路由切换加动画 */
  .v-enter,.v-leave-to{
           opacity: 0;
           transform: translateX(100px);
       } 
  .v-enter-active,.v-leave-active{
           transition: all 0.6s ease-in;
       }
</style>
