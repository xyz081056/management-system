<template>
  <div class="message">
      <h2>消息管理</h2>
      <div class="feature">
        <el-input
            placeholder="请输入内容"
            v-model="search"
            clearable
            style="width:200px">
        </el-input>
        <el-button type="primary" size="small" style="margin-left: 50%;" @click="add">
                <i class="el-icon-plus"></i>
                <span>增加</span>
        </el-button>
        <el-button type="danger" @click="delate">
                <i class="el-icon-folder-add" ></i>
                <span>批量删除</span>
        </el-button>
      </div>
       <hr style="width:100%"/>
       <div>
            <el-table
                ref="multipleTable"
                :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                label="发布状态"
                width="120">
                <template slot-scope="scope">{{ scope.row.publishTime }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="发布人"
                width="120">
                </el-table-column>
                <el-table-column
                prop="title"
                label="消息标题"
                width="120">
                </el-table-column>
                <el-table-column
                prop="creatTime"
                label="创建时间"
                show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作">
                        <template slot-scope="scope">
                            <el-button type="info" size="small" @click="look(scope.row)">查看</el-button>
                            <el-button @click="handleClick(scope.row)" type="warning" size="small">修改</el-button>
                            <el-button type="success" size="small" :disabled="scope.row.id == abc" @click="publish(scope.$index, scope.row)">发布</el-button>
                            <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
            </el-table>
            <!-- 添加弹框 -->
            <el-dialog :title="title" :visible.sync="dialogFormVisible">
                <el-form>
                  <el-form-item label="发布人：" style="text-align:left" :label-width='formLabelWidth'>
                    <el-input v-model="form.name" autocomplete="off" style="width:200px" placeholder="请输入姓名"></el-input>
                  </el-form-item>
                  <el-form-item label="消息标题：" :label-width="formLabelWidth">
                    <el-input v-model="form.title" autocomplete="off" placeholder="请输入活动标题"></el-input>
                  </el-form-item>
                  <el-form-item label="消息内容：" :label-width="formLabelWidth">
                    <el-input type="textarea" v-model="form.desc" :rows="5" placeholder="请输入具体活动内容"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="commit()">确 定</el-button>
                </div>
              </el-dialog>
              <!-- 分页 -->
            <el-pagination
                background
                layout="prev, pager, next"
                :total="50"
                style="text-align:right;margin:17px 10px 0 0">
            </el-pagination>
       </div>
  </div>
</template>

<script>
import store from '../../store'
export default {
    data() {
        return {
          tableData: [{
            id:1,
            publishTime: '已发布',
            name: '天天',
            title:'天天开心',
            desc:'jgdsljgjxlxkfglckbi',
            creatTime:'2019-8-12 15:32:45'
          },{
             id:2,
            publishTime: '已发布',
            name: '辅导员',
            title:'周院会',
            desc:'vjidioxihrhhfidj',
            creatTime:'2019-8-12 15:32:45'
          },{
             id:3,
            publishTime: '暂未发布',
            name: '信息系主任',
            title:'上机考试',
            desc:'',
            creatTime:'2019-11-12 15:32:45'
          },{
            id:4,
            publishTime: '暂未发布',
            name: '数学系主任',
            title:'数学建模活动',
            desc:'',
            creatTime:'2019-12-12 15:32:45'
          }],
          search:'',
          multipleSelection: [],
          abc:'',
          dialogFormVisible:false,
          title:'',
          formLabelWidth: '120px',
          form:{
            title:'',
            name:'',
            desc:'',
            creatTime:'',
            publishTime: '暂未发布',
          },
          id:'',//用于判断是添加还是修改
        }
      },
      beforeCreate(){
        this.message()
      },
      methods:{
        //   获取复选框所选对象的值,并且放到一个数组里
        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(this.multipleSelection)
        },
        // 添加
        add(){
          this.dialogFormVisible = true
          this.title = '添加新消息'
          this.id = 1
        
        },
        commit(){
          if(this.id == 1){
            this.dialogFormVisible = false
            this.$message({type: 'success',message: '添加成功!',center:true});
              let date = new Date()
              let seperator1 = '-'
              let seperator2 = ':'
              let year = date.getFullYear()
              let month = date.getMonth() + 1
              let strDate = date.getDate()
              let week = date.getDay() 
              let hour =date.getHours()
              let m = date.getMinutes()
              if (month >= 1 && month <= 9) {
                  month = '0' + month
              }
              if (strDate >= 0 && strDate <= 9) {
                  strDate = '0' + strDate
              }
              if (hour >= 0 && hour <= 9) {
                  hour = '0' + hour
              }
              if (m >= 0 && m <= 9) {
                  m = '0' + m
              }
              let currentdate = year + seperator1 + month + seperator1 + strDate + '  ' + hour + seperator2 + m +seperator2 + '00'
              this.form.creatTime = currentdate
              this.tableData.push(this.form)
              this.form = ''
          }else if(this.id == 2){
            this.dialogFormVisible = false
           this.$message({type: 'success',message: '修改成功!',center:true});
          }else{
            this.dialogFormVisible = false
            this.$message({type: 'success',message: '查看成功!',center:true});
          }
        },
        // 批量删除
        delate(){
            this.$confirm('此操作将永久这' + this.multipleSelection.length +'条消息，是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
            }).then(() => {
               var index = this.tableData.findIndex(item =>{
                    // if(item.id == row.id){
                      return true
                    // }
                })
                console.log(index)
            this.tableData.splice(index,this.multipleSelection.length)
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });
            });
        },
        // 单个删除
        handleDelete(index,row){
          var index = this.tableData.findIndex(item =>{
                    if(item.id == row.id){
                      return true
                    }
                })
                this.tableData.splice(index,1)
                this.$message({type: 'success',message: '删除成功!',center: true})
        },
        handleClick(row) {
            this.dialogFormVisible = true
            this.title = '修改新消息'
            this.id = 2
        },
        // 查看
        look(row){
         this.dialogFormVisible = true
         this.title = '查看新消息'
         this.id = 3
         this.form = row
        //  this.number = this.number - 1
        },
        message(){
           store.commit('message',{
                    number:'10'
                })
          },
        // 发布
        publish(index,row){
          this.tableData.findIndex(item =>{
            if(item.id == row.id){
              this.$message({type: 'success',message: '发布成功!',center: true})
              this.abc = row.id
              row.publishTime = '已发布'
              // this.abc.push(row.id)
              console.log(this.abc)
              }
          })
        }
    }
}
</script>

<style lang="stylus" scoped>
.feature{
    display: flex;
    width: 100%;
    margin-top:30px 
}
.feature .el-input{
    width: 20%;
    margin-left:5%;
}
</style>