<template>
<div class="active">
  <el-carousel :interval="4000" type="card" height="220px" style="margin-top:20px">
    <el-carousel-item v-for="item in 3" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <div class="main">
      <el-table
      height="230"
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="时间"
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
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">查看</el-button>
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
</div>
</template>
<script>
export default {
data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: ''
      }
    },
     methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
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
</style>