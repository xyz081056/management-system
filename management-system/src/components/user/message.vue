<template>
  <div class="message">
      <h2>消息管理</h2>
      <div class="feature">
        <el-input
            placeholder="请输入内容"
            v-model="input"
            clearable
            style="width:200px">
        </el-input>
        <el-button type="danger" @click="delate" style="margin-left: 60%;">
                <i class="el-icon-folder-add" ></i>
                <span>批量删除</span>
        </el-button>
      </div>
       <hr style="width:100%"/>
       <div>
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                stripe
                highlight-current-row
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                prop="creatTime"
                label="发布时间"
                width="200">
                <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
                </el-table-column>
                <el-table-column
                prop="title"
                label="消息标题"
                width="200">
                </el-table-column>
                <el-table-column
                prop="name"
                label="发布人"
                show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作">
                        <template slot-scope>
                            <el-button type="info" @click="look" size="small">查看</el-button>
                            <el-button type="danger" size="small">删除</el-button>
                        </template>
                    </el-table-column>
            </el-table>
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
export default {
    data() {
        return {
          tableData: [{
            id:1,
            name: '天天',
            title:'天天开心',
            desc:'jgdsljgjxlxkfglckbi',
            creatTime:'2019-8-12 15:32:45'
          },{
             id:2,
            name: '辅导员',
            title:'周院会',
            desc:'vjidioxihrhhfidj',
            creatTime:'2019-8-12 15:32:45'
          }],
          input:'',
          multipleSelection: []
        }
      },
      methods:{
        //   获取复选框所选对象的值,并且放到一个数组里
        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(this.multipleSelection)
        },
        // 批量删除
        delate(){
            this.$confirm('此操作将永久这' + this.multipleSelection.length +'条消息，是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
            }).then(() => {
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
        look(){
          this.postRequest('/users').then(res => {//本周搜索
                          if (res && res.status == 200) {
                      this.messages = res.data.obj.messageList;
                    //   console.log(this.messages)
                      this.$message({type: 'success', message: "查询成功！"});
                          }
                      })
        // this.$axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
        // console.log(res)
        //     this.tableData = res.data
        // })
        }
    },
    // mounted(){
    //   this.look()
    // }
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