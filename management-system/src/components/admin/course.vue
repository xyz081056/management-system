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
    <el-form disabled>
      <el-form-item label="选择时间" style="text-align:left;width:350px" :label-width='formLabelWidth'>
        <el-input v-model="date" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="选择节数" :label-width="formLabelWidth">
        <el-input v-model="name" autocomplete="off" ></el-input>
      </el-form-item>
      <el-form-item label="课程内容" :label-width="formLabelWidth">
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
            four:'',
            five:'',
            six:''
          },{
            date: '周六',
            one: '',
            two: '',
            three:'',
            four:'',
            five:'',
            six:''
          }, {
            date: '周日',
            one: '',
            two: '',
            three:'',
            four:'',
            five:'',
            six:''
          }],
        dialogFormVisible: false,
        formLabelWidth: '120px',
        date:'',
        name:'',
        desc:'',
        }
      },
      methods:{
        editInfo(){
          
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