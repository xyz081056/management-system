<template>
  <div class="course">
    <el-table
        :data="tableData"
        border
        
        style="width: 100%;margin-top:5px">
        <el-table-column
        prop="date"
        width="100">
        </el-table-column>
        <el-table-column
        prop="one"
        label="第一大节">
        </el-table-column>
        <el-table-column
        prop="two"
        label="第二大节">
        </el-table-column>
        <el-table-column
        prop="three"
        label="第三大节">
        </el-table-column>
        <el-table-column
        prop="four"
        label="第四大节">
        </el-table-column>
        <el-table-column
        prop="five"
        label="晚一">
        </el-table-column>
        <el-table-column
        prop="six"
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
            one: '数学分析（高云柱） 文科楼101',
            two: '',
            three:'',
            four:'',
            five:'',
            six:''
          }, {
            date: '周二',
            one: '',
            two: '',
            three:'数学分析（高云柱） 文科楼101',
            four:'',
            five:'',
            six:''
          }, {
            date: '周三',
            one: '',
            two: '',
            three:'',
            four:'',
            five:'数学分析（高云柱） 文科楼101',
            six:''
          }, {
            date: '周四',
            one: '',
            two: '数学分析（高云柱） 文科楼101',
            three:'',
            four:'',
            five:'',
            six:''
          },{
            date: '周五',
            one: '',
            two: '',
            three:'',
            four:'数学分析（高云柱） 文科楼101',
            five:'',
            six:''
          },{
            date: '周六',
            one: '',
            two: '',
            three:'',
            four:'',
            five:'',
            six:'数学分析（高云柱） 文科楼101'
          }, {
            date: '周日',
            one: '数学分析（高云柱） 文科楼101',
            two: '',
            three:'',
            four:'',
            five:'',
            six:''
          }],
          options1: [{
            value: 'Monday',
            label: '周一'
          }, {
            value: 'Tuesday',
            label: '周二'
          }, {
            value: 'Wednesday',
            label: '周三'
          }, {
            value: 'Thursday',
            label: '周四'
          }, {
            value: 'Friday',
            label: '周五'
          },{
            value: 'Saturday',
            label: '周六'
          },{
            value: 'Sunday',
            label: '周日'
          }],
          options2: [{
            value: 'firstSections',
            label: '第一大节'
          }, {
            value: 'secondSections',
            label: '第二大节'
          }, {
            value: 'thirdSections',
            label: '第三大节'
          }, {
            value: 'fourthSections',
            label: '第四大节'
          }, {
            value: 'fifthSections',
            label: '晚一'
          },{
            value: 'sixthSections',
            label: '晚二'
          }],
          rules:{
            date:[{required: true, message: '请输入时间', trigger: 'change'}],
            knot:[{required: true, message: '请输入节数', trigger: 'change'}],
            course:[{required: true, message: '请输入课程，任教老师，上课地点', trigger: 'blur'}],            
          },
          dialogFormVisible: false,
          formLabelWidth: '120px',
          form:{
            date:'',
            knot:'',
            course:'',
          }
        }
      },
}
</script>

<style lang="stylus" scoped>
.edit{
  position: absolute;
  bottom: 40px;
  right: 20px;
}
</style>