<template>
<div class="count">
    <div style="display:flex;margin-top:20px;width:100%">
        <el-menu :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="">
                <template slot="title">{{ message }}</template>
                <el-submenu index="1">
                    <template slot="title">信息与计算科学</template>
                    <el-menu-item index="信息与计算科学2016级">2016级</el-menu-item>
                    <el-menu-item index="信息与计算科学2017级">2017级</el-menu-item>
                    <el-menu-item index="信息与计算科学2018级">2018级</el-menu-item>
                    <el-menu-item index="信息与计算科学2019级">2019级</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">大数据</template>
                    <el-menu-item index="大数据2016级">2016级</el-menu-item>
                    <el-menu-item index="大数据2017级">2017级</el-menu-item>
                    <el-menu-item index="大数据2018级">2018级</el-menu-item>
                    <el-menu-item index="大数据2019级">2019级</el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
        <el-input v-model="search" placeholder="请输入姓名搜索关键字" style="width:20%;margin-left:5%"></el-input>
        <div style="width:45%;margin-left:25%;">
            <el-button type="primary" @click="dialogFormVisible=true">
                <i class="el-icon-plus"></i>
                <span>增加</span>
            </el-button>
            <el-button type="danger">
                <i class="el-icon-folder-add" ></i>
                <span>导入数据</span>
            </el-button>
            <el-button type="success">
                <i class="el-icon-folder-remove"></i>
                <span>导出数据</span>
            </el-button>
        </div>
    </div>
    <hr>
    <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        border
        height="470px"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
        type="selection"
        width="55">
        </el-table-column>
        <el-table-column
        fixed="left"
        prop="id"
        label="学号"
        width="130px">
        </el-table-column>
        <el-table-column
        prop="name"
        fixed="left"
        label="姓名"
        width="100px">
        </el-table-column>
        <el-table-column
        prop="phone"
        label="电话"
        width="150px">
        </el-table-column>
        <el-table-column
        prop="email"
        label="邮箱"
        width="150px">
        </el-table-column>
        <el-table-column
        prop="address.city"
        label="生源地"
        width="100px">
        </el-table-column>
        <el-table-column
        prop="address.street"
        label="家庭住址"
        width="360px">
        </el-table-column>
        <el-table-column
        prop="address.zipcode"
        label="身份证号码"
        width="200px">
        </el-table-column>
        <el-table-column
        prop="company.name"
        label="政治面貌"
        width="100px">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="150px">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="info" size="small">修改</el-button>
                <el-button type="danger" size="small"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
    <el-form :model="form" :rules="rules" ref="form">
      <el-row>
        <el-col :span="12">
          <el-form-item label="学号" style="text-align:left;width:350px" :label-width='formLabelWidth' prop="studyId">
            <el-input v-model="form.studyId" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="姓名" style="text-align:left;width:350px" :label-width='formLabelWidth' prop="name">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      
      <el-row>
        <el-col :span="12">
          <el-form-item label="专业班级" style="text-align:left;width:350px"  :label-width="formLabelWidth" prop="major">
            <el-select v-model="form.major"  placeholder="请选择专业班级">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="政治面貌" style="text-align:left;width:350px" :label-width='formLabelWidth' prop="politicsStatus">
            <el-select v-model="form.politicsStatus"  placeholder="请选择政治面貌">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="家庭住址" style="text-align:left;width:350px" :label-width='formLabelWidth' prop="address">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="身份证号码" style="text-align:left;width:350px" :label-width='formLabelWidth' prop="identityId">
            <el-input v-model="form.identityId" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="生源地" style="text-align:left;width:350px" :label-width='formLabelWidth' prop="originOfStudent">
        <el-input v-model="form.originOfStudent" autocomplete="off"></el-input>
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
        title:'添加信息',
        activeIndex: '1',
        tableData1:[{
          id: '201612030121',
          name: '天天',
          phone: '15898634572',
          email:'158634597@qq.com',
          address: {
            street:'吉林省吉林市丰满区吉林大街幸福小区',
            city:'吉林-吉林',
            zipcode:'201569852468752468'
            },
          company:{
            name:'共产党员'
            },
          },

          {
          id: '201612030122',
          name: '宋锦瑟',
          phone: '15898634572',
          email:'158634597@qq.com',
          address: {
            street:'吉林省吉林市丰满区吉林大街幸福小区',
            city:'吉林-吉林',
            zipcode:'201569852468752468'
            },
          company:{
            name:'共产党员'
            },
          },
          
          {
          id: '201612030123',
          name: '陈华年',
          phone: '15898634572',
          email:'158634597@qq.com',
          address: {
            street:'吉林省吉林市丰满区吉林大街幸福小区',
            city:'吉林-吉林',
            zipcode:'201569852468752468'
            },
          company:{
            name:'共产党员'
            },
          },
          
          {
          id: '201612030124',
          name: '牧鑫',
          phone: '15898634572',
          email:'158634597@qq.com',
          address: {
            street:'吉林省吉林市丰满区吉林大街幸福小区',
            city:'吉林-吉林',
            zipcode:'201569852468752468'
            },
          company:{
            name:'共产党员'
            },
          },],
        tableData: [
          ],
        // 表单验证
        rules:{
            studyId:[{required: true, message: '请输入学号', trigger: 'blur'}],
            originOfStudent:[{required: true, message: '请输入生源地', trigger: 'blur'}],
            address:[{required: true, message: '请输入地址', trigger: 'blur'}],
            identityId:[{required: true, message: '请输入身份证', trigger: 'blur'}],
            politicsStatus:[{required: true, message: '请输入政治面貌', trigger: 'blur'}],
            major:[{required: true, message: '请输入节数', trigger: 'change'}],
            name:[{required: true, message: '请输入姓名', trigger: 'blur'}],            
          },
        form:{
          studyId:'',
          name:'',
          major:'',
          originOfStudent:'',
          address:'',
          identityId:'',
          politicsStatus:'',
        },
        search:'',
        message:'请选择专业年级',
        formLabelWidth: '120px',
        dialogFormVisible:false,
        options1:[{
            value:'大数据18级'
          },{
            value:'大数据19级'
          },
          {
            value:'信息与计算科学16级'
          },{
            value:'信息与计算科学17级'
          },{
            value:'信息与计算科学18级'
          },{
            value:'信息与计算科学19级'
          }
          ],
        options2:[
          {
            value:'党员'
          },{
            value:'共青团员'
          },{
            value:'中共预备党员'
          },{
            value:'其他'
          }
        ]
      }
    },
    methods: {
      // 调用接口获取信息
      // getUserInfo() {
      //   this.$axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
      //   // console.log(res)
      //       this.tableData1 = res.data
      //   })
      // },
      handleClick(row) {
        console.log(row);
        this.dialogFormVisible = true
        this.form = row
        this.title = '修改信息'
      },
      handleSelect(keyPath) {
          this.message = keyPath
        // console.log(keyPath,typeof(keyPath));
        if(keyPath == '信息与计算科学2016级'){
         this.$axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
        // console.log(res)
            this.tableData = res.data
        })
        }else{
          this.tableData = this.tableData1
        }
      },
      editCourse(form){
          console.log(this.form)
          this.$refs[form].validate((valid) => {
          if (valid) {
            this.dialogFormVisible = false
            this.tableData.push(this.form)
            this.$message({type: 'success',message: '添加成功!',center: true})
            this.form = ''
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        },
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
         handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(this.multipleSelection)
      },
    },
    // created(){
    //   this.handleSelect()
    //   // this.getUserInfo()
    // }
  }
</script>
<style>

.el-menu--horizontal>.el-submenu .el-submenu__title{
  height:40px;
  line-height:40px;
}
.el-dialog{
  width: 70%;
}
</style>