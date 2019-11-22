<template>
<div class="active">
  <el-carousel :interval="4000" type="card" height="220px" style="margin-top:20px">
   <el-carousel-item v-for="item in img" :key="item.id">
        <img :src="item.url" class="image">
    </el-carousel-item>
  </el-carousel>
  <div class="main">
      <el-table
      height="230"
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="活动时间"
      prop="date">
    </el-table-column>
    <el-table-column
      label="活动标题"
      prop="name">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope>
        <el-input
          v-model="search"
          style="margin-left:20px"
          placeholder="输入活动名称关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleRead(scope.$index, scope.row)">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="50"
    style="text-align:right;margin:17px 10px 0 0">
  </el-pagination>
  <el-dialog title="活动详情" :visible.sync="dialogFormVisible">
  <el-form disabled>
    <el-form-item label="活动时间" style="text-align:left;width:350px" :label-width='formLabelWidth'>
       <el-input v-model="date" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="name" autocomplete="off" ></el-input>
    </el-form-item>
    <el-form-item label="活动内容" :label-width="formLabelWidth">
      <el-input type="textarea" v-model="desc" :rows="5"></el-input>
    </el-form-item>
    
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>
<script>
export default {
data() {
      return {
         img:[
          {
            id:1,
            url:require("../../assets/beaut1.jpg")
          },
          {
            id:2,
            url:require("../../assets/beaut2.jpg")
          },
          {
            id:3,
            url:require("../../assets/beaut3.jpg")
          }
        ],
        tableData: [{
          id:1,
          date: '2016-05-02 星期三 11:00:00',
          name: '篮球比赛',
          desc:'学院将于5月2日进行篮球比赛，请同学们积极报名，踊跃参与'
        }, {
          id:2,
          date: '2016-05-04 星期五 15:00:00',
          name: '书画大赛',
          desc:'学院将于5月4日进行书画大赛，请同学们积极报名，踊跃参与'
        }, {
          id:3,
          date: '2016-05-01 星期二 16:00:00',
          name: '数学建模',
          desc:'学院将于5月2日进行数学建模比赛，请同学们积极报名，踊跃参与'
        }, {
          id:4,
          date: '2016-05-03 星期四 19:00:00',
          name: '四六级考试',
          desc:'学院将于5月2日进行四六级考试，请同学们遵守考试纪律，维护考场秩序'
        }],
        search: '',
        dialogFormVisible: false,
        formLabelWidth: '120px',
        date:'',
        name:'',
        desc:'',
      }
    },
     methods: {
      handleRead(index,row){
      console.log(row)
      this.dialogFormVisible = true
      this.date = row.date
      this.name = row.name
      this.desc = row.desc
      },
    },
}
</script>

<style lang="stylus" scoped>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 230px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .main{
     background-color: red;
      height: 230px;
      width: 100%;
  }
   .image{
    height: 220px;
    width: 525px
  }
</style>