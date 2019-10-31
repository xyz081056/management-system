<template>
    <div>
        <el-menu :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            style="width:200px;margin:20px"
            active-text-color="#ffd04b">
            <el-submenu index="">
                <template slot="title">{{ message }}</template>
                <el-submenu index="1">
                    <template slot="title">大一</template>
                    <el-menu-item index="大一上学期">上学期</el-menu-item>
                    <el-menu-item index="大一下学期">下学期</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">大二</template>
                    <el-menu-item index="大二上学期">上学期</el-menu-item>
                    <el-menu-item index="大二下学期">下学期</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">大三</template>
                    <el-menu-item index="大三上学期">上学期</el-menu-item>
                    <el-menu-item index="大三下学期">下学期</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">大四</template>
                    <el-menu-item index="大四上学期">上学期</el-menu-item>
                    <el-menu-item index="大四下学期">下学期</el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
        <hr>
        <el-table
            height="450"
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || 
            data.subject.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column
            label="待评价老师"
            prop="name">
            </el-table-column>
            <el-table-column
            label="任教科目"
            prop="subject">
            </el-table-column>
            <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
                <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">评价</el-button>
            </template>
            </el-table-column>
        </el-table>
    </diV>
</template>

<script>
export default {
data(){
    return{
        tableData: [{
          name: '王虎',
          subject:'数学分析'
        }, {
          name: '王小虎',
          subject:'高等代数'
        }, {
          name: '王小虎',
          subject:'常微分'
        }, {
          name: '王小虎',
          subject:'密码学'
        }],
        search: '',
        message:'请选择评价学期',
        activeIndex: '1',
        search:''
        }
    },
    methods:{
        handleSelect(key,keyPath) {
            keyPath.forEach(item => {
                this.message = item
            });
      },
    }
}
</script>

<style>
.el-menu--horizontal>.el-submenu .el-submenu__title{
  height:40px;
  width: 200px;
  line-height:40px;
}
</style>