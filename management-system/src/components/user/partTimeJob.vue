<template>
    <div>
        <div style="display:flex">
        <el-menu :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            style="width:20%;margin:20px 5% 0 20px"
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
        <el-input style="width:20%;margin-top:20px;" v-model="search" clearable placeholder="输入关键字搜索"/>
        <el-button type="success"  style="margin:20px 0 0 15%;height:40px">
                <i class="el-icon-goods"></i>
                <span>我的兼职</span>
        </el-button>
        <el-button type="danger"  style="margin-top:20px;height:40px">
                <i class="el-icon-plus"></i>
                <span>发布兼职</span>
        </el-button>
        <el-button type="primary"  style="margin-top:20px;height:40px">
                <i class="el-icon-s-shop"></i>
                <span>我的发布</span>
        </el-button>
    </div>
        <hr>
        <el-table
            height="450"
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || 
            data.subject.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column
            label="职位"
            prop="name">
            </el-table-column>
            <el-table-column
            label="时间"
            prop="subject">
            </el-table-column>
            <el-table-column
            label="薪资"
            prop="subject">
            </el-table-column>
            <el-table-column
            label="地点"
            prop="subject">
            </el-table-column>
            <el-table-column
            label="联系方式"
            prop="subject">
            </el-table-column>
            <el-table-column
            fixed="right">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">申请职位</el-button>
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
        message:'请选择兼职类型',
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