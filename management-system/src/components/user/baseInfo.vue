<template>
  <div class="baseInfo">
    <div class="main">
      <div class="headPortrait">
        <img src="../../assets/beaut.jpg" style="width:150px;height:180px">
      </div>
      <div class="base1">
        <p>姓名：{{ tableData.name }}</p>
        <p>学院：{{ tableData.academy }}</p>
        <p>专业：{{ tableData.major }}</p>
        <p>班级：{{ tableData.professional }}</p>
        <p>学号：{{ tableData.teachYear }}</p>
      </div>
      <div class="base2"> 
        <p>政治面貌：{{ tableData.teachYear }}</p>
        <p>担任职务：{{ tableData.teachYear }}</p>        
        <p>学分基点：{{ tableData.teachYear }}</p>
        <p>挂科次数：{{ tableData.teachYear }}</p>
        <p>补考次数：{{ tableData.teachYear }}</p>
      </div>
      <hr class="info">
      <p class="warning">如有错误，请联系本专业系统管理员。联系电话：18582370568</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableData:'',      
    }
  },
   created(){
      this.get()
   },
  methods:{
    editInfo(){
      alert('你好')
    },
    get(){
      this.tableData = this.$route.query
      console.log(this.tableData)
    },
  }

}
</script>

<style lang="stylus" scoped>
.main{
  margin-top:20px; 
  height: 520px;
  width: 100%;
  position: relative;
  border-radius: 3px
}
.main .headPortrait{
  position:absolute;
  top:10px;
  left:40px;
  width: 150px;
  height: 180px;
}
.main .base1{
  position: absolute;
  left: 240px;
}
.base1 p{
  margin-left:10px;
  text-align:left;
}
.main .base2{
  position: absolute;
  left: 400px;
}
.base2 p{
  margin-left:80px;
  text-align:left;
}
.info{
  position: absolute;
  top: 200px;
  left: 2%;
  width: 97%;
}
.warning{
  position: absolute;
  top: 210px;
  right: 2%;
  color:red;
}
</style>