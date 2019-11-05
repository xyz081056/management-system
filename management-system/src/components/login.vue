<template>
  <div class="login" >
      <fieldset class="login-form" v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading">
            <legend align="left" >信息与计算科学</legend>
            <el-form  :rules="rules" ref="form" :model="form" >
                <el-form-item label="账号：" style="display:flex;" prop="username">
                    <el-input type="text" v-model="form.username" style="width:300px;padding:0"></el-input>
                </el-form-item>
                <el-form-item label="密码：" style="display:flex" prop="password">
                    <el-input type="password" v-model="form.password" style="width:300px;padding:0px"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="margin-right:40px" @click="submit(form)">登录</el-button>
                    <el-button  @click="resetForm('form')">重置</el-button>
                </el-form-item>
            </el-form>
      </fieldset>
  </div>
</template>

<script>
import store from '../store'
export default {
data() {
        return {
            loading: false,
            form:{
                username:'',
                password:'',
            },
            data:{
                name:'萤火之森',
                academy:'自然科学院',
                major:'妖怪与精灵',
                professional:'精灵大学士',
                teachYear:'10年'

            },
            rules: {
                username: [{ required: true, message: '请输入账号即学号或者教师编号', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        }
    },
    methods:{
        submit(){
            if(this.form.username == 'user'&&this.form.password == '123'){
                store.commit('login',{
                    name:'萤火之森',
                    academy:'自然科学院',
                    major:'妖怪与精灵',
                    professional:'精灵大学士',
                    teachYear:'10年'
                })
                this.loading = true
                this.$router.push({path: '/userHome'})
                this.$message({type: 'success',message: '登录成功!',center: true})
            }else if(this.form.username == 'admin'&&this.form.password == '123'){
                 store.commit('login',{
                    name:'管理员',
                    academy:'自然科学院',
                    major:'妖怪与精灵',
                    professional:'精灵大学士',
                    teachYear:'10年'
                })//this.$store.commit('mutations方法名',值)
                this.loading = true
                this.$router.push({path: '/adminHome'})
                this.$message({type: 'success',message: '登录成功!',center: true})
            }else{

                 this.$message({type: 'warning',message: '登录失败!',center: true});
            }   
        },
        // 重置
        resetForm(form) {
        this.$refs[form].resetFields()//使用该方法，el-form 元素上必须：model，否则不能生效
      }
    }
}
</script>

<style lang="stylus" scoped> 
// npm install stylus --save  npm install stylus-loader --save 避免组件间样式的相互影响
.login-form{
    margin-top:60px;
    box-shadow:#e4e4e4 10px 10px;
    padding :60px 20px 10px 30px;
    // border:black 1px solid ;
    border-radius:5px;
    background-color :#FFFFFF;
    text-align :center;
    position :absolute;
    left : 31%;
    width :400px;
}

</style>