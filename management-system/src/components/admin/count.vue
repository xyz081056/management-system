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
        <el-input v-model="input" placeholder="请输入搜索关键字" style="width:20%;margin-left:5%"></el-input>
        <div style="width:45%;margin-left:25%;">
            <el-button type="primary">
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
        :data="tableData"
        border
        height="470px"
        style="width: 100%">
        <el-table-column
        fixed="left"
        prop="date"
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
        prop="province"
        label="专业"
        width="150px">
        </el-table-column>
        <el-table-column
        prop="province"
        label="生源地"
        width="100px">
        </el-table-column>
        <el-table-column
        prop="city"
        label="家庭住址"
        width="360px">
        </el-table-column>
        <el-table-column
        prop="address"
        label="身份证号码"
        width="200px">
        </el-table-column>
        <el-table-column
        prop="zip"
        label="政治面貌"
        width="100px">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="150px">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="info" size="small">修改</el-button>
                <el-button type="danger" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        tableData: [{
          date: '201612030124',
          name: '王小虎',
          province: '计算科学',
          city: '四川省广元市朝天区陈家乡青坪村六组17号',
          address: '510812199610081056',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }],
        input:'',
        message:'请选择专业班级'
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      handleSelect(keyPath) {
          this.message = keyPath
        // console.log(keyPath);
      }
    },
  }
</script>
<style lang="stylus">
.el-menu--horizontal>.el-submenu .el-submenu__title{
    height: 40px;
    line-height: 40px;
}
</style>