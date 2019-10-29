<template>
  <div class="baseInfo">
    <div>
      <el-button type="primary" icon="el-icon-edit" circle class="edit" @click="editInfo"></el-button>
    </div>
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
   mounted(){
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

<style>
.edit{
  position: absolute;
  bottom: 40px;
  right: 20px;
}
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
</style>