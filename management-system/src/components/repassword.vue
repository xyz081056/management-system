<template>
  <div class="login">
        <fieldset class="login-form">
            <legend align="left">修改密码</legend>
            <el-form  :rules="rules" ref="form" :model="form">
                <el-form-item label="原密码：" style="display:flex;" prop="oldpassword">
                    <el-input type="text" v-model="form.oldpassword" style="width:300px;padding:0"></el-input>
                </el-form-item>
                <el-form-item label="新密码：" style="display:flex" prop="newpassword">
                    <el-input type="password" v-model="form.newpassword" style="width:300px;padding:0px"></el-input>
                </el-form-item>
                <el-form-item label="请再输：" style="display:flex" prop="checkpassword">
                    <el-input type="password" v-model="form.checkpassword" style="width:300px;padding:0px"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="margin-right:40px" @click="changPassword('form')">确定</el-button>
                    <el-button  @click="reHome">返回</el-button>
                </el-form-item>
            </el-form>
      </fieldset>
      
  </div>
</template>

<script>
export default {
data() {
     var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入新密码'));
        } else if (value !== this.form.newpassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
            form:{
                oldpassword:'',
                newpassword:'',
                checkpassword:'',
            },
            rules: {
                oldpassword: [{ required: true, message: '请输入原密码', trigger: 'blur' }],
                newpassword: [{ required: true, validator: validatePass, trigger: 'blur' }],
                checkpassword: [{  required: true, validator: validatePass2, trigger: 'blur' }]
            },
            ids:''
        }
    },
    mounted(){
      this.get()
   },
    methods:{
       changPassword(form){
         this.$refs[form].validate((valid) => {
          if (valid) {
            this.$router.push({path: '/'})
            this.$message({type: 'success',message: '密码更改成功，请重新登录！',center: true})
          } else {
            console.log('error submit!!');
            return false;
          }
          });
       }, 
        get(){
        this.ids = this.$route.query.id
        console.log(this.id)
      },
       reHome(){
         if(this.ids == 1){
             this.$router.push({path: '/userHome'})
         }else{
            this.$router.push({path: '/adminHome'})
         }
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
    border:black 1px solid ;
    border-radius:5px;
    background-color :#FFFFFF;
    text-align :center;
    position :absolute;
    left : 31%;
    width :400px;
}


</style>