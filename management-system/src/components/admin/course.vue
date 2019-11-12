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
    <el-button type="primary" icon="el-icon-edit" circle class="edit" @click="dialogFormVisible = true"></el-button>
  <el-dialog title="添加课程" :visible.sync="dialogFormVisible">
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="选择时间" style="text-align:left;width:350px" :label-width='formLabelWidth' prop="date">
        <el-select v-model="form.date"  placeholder="请选择">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择节数" style="text-align:left;width:350px"  :label-width="formLabelWidth" prop="knot">
        <el-select v-model="form.knot"  placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="课程内容" :label-width="formLabelWidth" prop="course">
        <el-input type="textarea" v-model="form.course" :rows="5"></el-input>
      </el-form-item>
      
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="editCourse('form')">确 定</el-button>
    </div>
</el-dialog>
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
      methods:{
        editCourse(form){
          console.log(this.form)
          this.$refs[form].validate((valid) => {
          if (valid) {
            this.dialogFormVisible = false
            this.$message({type: 'success',message: '添加成功!',center: true})
            this.form = ''
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        }
      }

}
</script>

<style lang="stylus" scoped>
.edit{
  position: absolute;
  bottom: 40px;
  right: 20px;
}
</style>