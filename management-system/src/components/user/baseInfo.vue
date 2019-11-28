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
      <div class="randomContent">
        <p>{{ details }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../store' 
export default {
  data(){
    return{
      tableData:'', 
      details:''      
    }
  },
   created(){
      this.baseInfo()
      this.editInfo()
   },
   mounted(){
     this.get()
   },
  methods:{
    baseInfo(){
     store.commit('Info',{
                    name:'萤火之森',
                    academy:'自然科学院',
                    major:'妖怪与精灵',
                    professional:'精灵大学士',
                    teachYear:'10年',
                    number:12
                })//this.$store.commit('mutations方法名',值)
    },
    editInfo(){
      let randomData = [{content:'我喜欢,春天的花,夏天的树,秋天的黄昏,以及每天的你'},
                       {content:'相逢太短,等不及茶凉,你若驻足,我陪你,走完风霜'},
                       {content:'当他们之间已成往事，最难堪的便是一切清晰如昨。'},
                       {content:'等待不可怕，可怕的是不知道什么时候是尽头。'},
                       {content:'青春是蒲公英，看似自在，却身不由己'},
                       {content:'向来缘浅，奈何情深。'}]
      var index = Math.floor((Math.random()*randomData.length))
      this.details = randomData[index].content
    },
    get(){
      this.tableData = this.$store.state.baseInfo
    },
  }

}
</script>

<style lang="stylus" scoped>
.main{
  margin-top:20px; 
  height: 530px;
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
.randomContent{
  height 200px
  width 100%
  position: absolute;
  top:220px
}
.randomContent p{
  line-height 110px
  font-size 60px
  text-align left
  text-indent 120px
  text-shadow: 5px 5px 5px #FF0000;
  font-style:italic
  color skyblue 
}
</style>