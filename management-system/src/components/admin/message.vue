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
        <el-button type="primary" size="small" style="margin-left: 50%;">
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
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                label="发布时间"
                width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="消息标题"
                width="120">
                </el-table-column>
                <el-table-column
                prop="address"
                label="创建时间"
                show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作">
                        <template slot-scope="scope">
                            <el-button type="info" size="small">查看</el-button>
                            <el-button @click="handleClick(scope.row)" type="warning" size="small">修改</el-button>
                            <el-button type="success" size="small">发布</el-button>
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
            date: '2016-05-02',
            name: '王小虎',
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
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
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
    handleClick(row) {
            console.log(row);
        },
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