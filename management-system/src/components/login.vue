<template>
  <div class="login">
      <fieldset class="login-form">
            <legend align="left">信息与计算科学</legend>
            <el-form  :rules="rules" ref="ruleForm" :model="form">
                <el-form-item label="账号：" style="display:flex;" prop="username">
                    <el-input type="text" v-model="form.username" style="width:300px;padding:0"></el-input>
                </el-form-item>
                <el-form-item label="密码：" style="display:flex" prop="password">
                    <el-input type="password" v-model="form.password" style="width:300px;padding:0px"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="margin-right:40px" @click="submit">登录</el-button>
                    <el-button  @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
      </fieldset>
      <div class="copyright">
          <b>@版权归许友宗所有，引用或使用请注明出处 &emsp;&emsp; 联系电话：15884637167</b>
      </div>
  </div>
</template>

<script>
export default {
data() {
        return {
            form:{
                username:'',
                password:'',
            },
            data:{
                name:'许友宗',
                academy:'数学与统计学院',
                major:'信息与计算科学',
                professional:'教授',
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
            if(this.form.username == 201612030124){
                this.$router.push({path: '/userHome',query: this.data})
            }else if(this.form.username == 123456789){
                this.$router.push({path: '/adminHome',query: this.data})
            }else{
                 this.$message({type: 'warning',message: '登录失败!'
          });
            }
            
        },
        resetForm(formName) {
        this.$refs[formName].resetFields()//使用该方法，el-form 元素上必须：model，否则不能生效
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
.copyright{
    position:absolute;
    right :60px;
    bottom :40px
}

</style>