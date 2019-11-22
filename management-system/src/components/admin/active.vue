<template>
<div class="active">
  <!-- 轮播图 -->
  <el-carousel :interval="4000" type="card" height="220px" style="margin-top:20px">
    <el-carousel-item v-for="item in img" :key="item.id">
        <img :src="item.url" class="image">
    </el-carousel-item>
  </el-carousel>
  <!-- 活动表格 -->
  <div class="main">
    <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="活动时间"
      prop="date">
    </el-table-column>
    <el-table-column
      label="活动名称"
      prop="name">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope"  >
        <div style="display:flex;">
          <el-button size="mini" type="danger" @click="mode">
            <i class="el-icon-plus"></i>
            <span>增加</span>
          </el-button>
          <el-input
          v-model="search"
          style="margin-left:20px"
          placeholder="输入活动名称关键字搜索"/>
        </div>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        <el-button
          size="mini"
          type="info"
          :disabled="scope.row.id == abc"
          @click="handlePublish(scope.$index, scope.row)">发布</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
  <!-- 分页 -->
  <el-pagination
    background
    layout="prev, pager, next"
    :total="50"
    style="text-align:right;margin:17px 10px 0 0">
  </el-pagination>
  <!-- 增加活动弹出框 -->
  <el-dialog :title="title" :visible.sync="dialogFormVisible">
  <el-form>
    <el-form-item label="活动图片" style="text-align:left" :label-width='formLabelWidth'>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :limit="1"
        :on-exceed="handleExceed"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture">
        <el-button size="small" type="primary">
          <i class="el-icon-plus"></i>
          <span>点击上传活动图片</span>
        </el-button>
        <span slot="tip" class="el-upload__tip" style="margin-left:20px">只能上传jpg/png文件，且不超过1M</span>
      </el-upload>
    </el-form-item>
    <el-form-item label="活动时间" style="text-align:left" :label-width='formLabelWidth'>
       <el-date-picker
        v-model="date"
        type="datetime"
        placeholder="选择日期时间">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动内容" :label-width="formLabelWidth">
      <el-input type="textarea" v-model="desc" :rows="5"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="add()">确 定</el-button>
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
        dialogFormVisible: false,
        formLabelWidth: '120px',
        search: '',
        fileList:[],
        abc:[],
        date:'',
        name:'',
        desc:'',
        id:4,
        title:''
      }
    },
     methods: {
      //  修改
      handleEdit(index, row) {
        console.log(index, row);
        this.dialogFormVisible = true
        this.title = '修改活动'

      },
      // 发布
      handlePublish(index,row){
        this.tableData.findIndex(item =>{
            if(item.id == row.id){
              this.$message({type: 'success',message: '发布成功!',center: true})
              this.abc = row.id
              // this.abc.push(row.id)
              // console.log(this.abc)
              }
          })
      },
      // 根据id进行删除
      handleDelete(index,row) {
        console.log(row)
        var index = this.tableData.findIndex(item =>{
                    if(item.id == row.id){
                      return true
                    }
                })
                this.tableData.splice(index,1)
                this.$message({type: 'success',message: '删除成功!',center: true})
      },
      // 上传活动图片下的方法
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      // 添加功能
      mode(){
        this.dialogFormVisible = true
        this.title = '添加活动'
      },
      add(index,row){
        let date = this.date
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
        let weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        let currentdate = year + seperator1 + month + seperator1 + strDate + '  ' + weekday[week] +'  ' + hour + seperator2 + m +seperator2 + '00'
        let form = {  id:this.id++,date:currentdate,name : this.name,desc : this.desc  }
        this.dialogFormVisible = false
        this.tableData.push(form)
        this.date = this.desc = this.name = ''
        console.log(row)
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
      // background-color: red;
      height: 230px;
      width: 100%;
  }
  .image{
    height 220px
    width 525px
  }
 
</style>