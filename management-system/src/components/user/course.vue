<template>
  <div class="course">
    <el-table
        :data="tableData"
        border
        height="545px"
        style="width: 100%;margin-top:5px">
        <el-table-column
        prop="date"
        width="100">
        </el-table-column>
        <el-table-column
        prop="name"
        label="第一大节">
        </el-table-column>
        <el-table-column
        prop="address"
        label="第二大节">
        </el-table-column>
        <el-table-column
        prop="address"
        label="第三大节">
        </el-table-column>
        <el-table-column
        prop="address"
        label="第四大节">
        </el-table-column>
        <el-table-column
        prop="address"
        label="晚一">
        </el-table-column>
        <el-table-column
        prop="address"
        label="晚二">
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
     data() {
        return {
          tableData: [{
            date: '周一',
            name: '数学分析（高云柱） 文科楼101',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '周二',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '周三',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '周四',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '周五',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '周六',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '周日',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
}
</script>

<style lang="stylus" scoped>
</style>