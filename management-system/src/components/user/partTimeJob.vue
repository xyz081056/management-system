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
                    <template slot="title">家教</template>
                    <el-menu-item index="家教文化类">文化类</el-menu-item>
                    <el-menu-item index="家教艺体类">艺体类</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">托管</template>
                    <el-menu-item index="托管全托">全托</el-menu-item>
                    <el-menu-item index="托管半托">半托</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">小时工</template>
                    <el-menu-item index="小时工服务员">服务员</el-menu-item>
                    <el-menu-item index="小时工地推">地推</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">网络兼职</template>
                    <el-menu-item index="好评刷单">刷单</el-menu-item>
                    <el-menu-item index="直播带货">直播</el-menu-item>
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
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column
            label="职位"
            prop="name">
            </el-table-column>
            <el-table-column
            label="时间"
            prop="time">
            </el-table-column>
            <el-table-column
            label="薪资"
            prop="salary">
            </el-table-column>
            <el-table-column
            label="地点"
            prop="place">
            </el-table-column>
            <el-table-column
            label="联系方式"
            prop="phone">
            </el-table-column>
            <el-table-column
            fixed="right">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="apply(scope.$index, scope.row)">申请职位</el-button>
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
          name: '服务员',
          time:'每天17:00-22:00',
          salary:'10元/h',
          place:'江北区',
          phone:'14568235489'
        },{
          name: '高三数学家教',
          time:'周六10:00-12:00',
          salary:'50元/h',
          place:'江北区',
          phone:'14568235489'
        },{
          name: '初中英语家教',
          time:'周一到周五18:00-20:00',
          salary:'40元/h',
          place:'江北区',
          phone:'14568235489'
        },{
          name: '舞蹈老师',
          time:'周日10:00-12:00',
          salary:'100元/h',
          place:'江北区',
          phone:'14568235489'
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
      apply(){
          this.$message({type: 'success',message: '申请成功!',center:true});
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