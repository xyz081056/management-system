<template>
  <div class="login">
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
                    <el-button type="primary" style="margin-right:40px" @click="submit('form')">登录</el-button>
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
            rules: {
                username: [{ required: true, message: '请输入账号即学号或者管理员账号', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        }
    },
    methods:{
        submit(form){
            this.$refs[form].validate((valid) => {
            if (valid && this.form.username == '201612030124' && this.form.password == '123') {
                store.commit('login',{
                   username : this.form,
                   password : this.password
                })
                this.loading = true
                this.$router.push({path: '/userHome'})
                this.$message({type: 'success',message: '登录成功!',center: true})
            }
            else if(valid && this.form.username == 'admin'&&this.form.password == '123'){
                store.commit('login',{
                   username : this.form,
                   password : this.password
                })
                this.loading = true
                this.$router.push({path: '/adminHome'})
                this.$message({type: 'success',message: '登录成功!',center: true})
            } else if(this.form.username == ''|| this.form.password == ''){
                this.$message({type: 'warning',message: '登录失败！请同时输入账号和密码。',center: true});
                return false;
            }else {
                this.$message({type: 'warning',message: '登录失败！请检查账户名和密码是否正确。',center: true});
                return false;
            }
          });
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
    left : 35%;
    width :400px;
}

</style>