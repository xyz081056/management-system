<template>
  <div class="baseInfo">
    <div class="main">
      <div class="headPortrait">
        <img src="../../assets/beaut.jpg" style="width:150px;height:180px">
      </div>
      <div class="base">
        <p>姓名：{{ tableData.name }}</p>
        <p>学院：{{ tableData.academy }}</p>
        <p>专业：{{ tableData.major }}</p>
        <p>职称：{{ tableData.professional }}</p>
        <p>教龄：{{ tableData.teachYear }}</p>
      </div>
      <hr class="info">
      <p class="warning">如有错误，请联系学校系统管理员。联系电话：18582370568</p>
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
.main .base{
  position: absolute;
  left: 240px;
}
.base p{
  margin-left:10px;
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