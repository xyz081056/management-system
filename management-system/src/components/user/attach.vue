<template>
  <div class="attachBar">
      <div class="logo">
           <img src="../../assets/beaut.jpg" style="width:120px;height:120px">
           <span>数学与统计学院贴吧</span>
      </div>
      <div class="header">
          <span>看帖</span>
          <span>视频</span>
          <span>图片</span>
          <span>群组</span>
          <el-input size="mini" prefix-icon="el-icon-search" placeholder="吧内搜索" v-model="search"></el-input>
      </div>
      <div class="main">
          <div class="main-left">
              <p>发帖</p>
              <p>刷新</p>
              <p>回到顶部</p>
          </div>
          <div class="main-right"
            style="overflow:auto;height:330px;margin-top:20px"
            v-infinite-scroll="load"
            infinite-scroll-disabled="disabled">
                <ul  style="list-style:none;margin-left:-20px">
                    <li v-for="(i,index) in count" :key="index" style="text-align:left" >
                        <div  v-for="(item,index) in date" :key="index" 
                        style="line-height:35px;text-indent:50px;height:35px;margin-bottom:20px">
                        <span style="color:black">标题：</span>
                        <span style="color:blue;" >
                            {{ item.title }}
                        </span>
                        <span>
                            <i class="el-icon-user-solid"></i>
                            <span>{{item.author}}</span>
                        </span>
                         </div>
                    </li>
                </ul>
                <p v-if="loading">加载中...</p>
                <p v-if="noMore">没有更多了</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
 data () {
      return {
        search:'',
        count: 1,
        loading: false,
        date:[
            {title:'人生若只如初见，何事秋风悲画扇。',author:'—纳兰性德《木兰词·拟古决绝词柬友》'},
            {title:'山有木兮木有枝，心悦君兮君不知。',author:'——佚名《越人歌》'},
            {title:'山无陵，江水为竭。冬雷震震，夏雨雪。天地合，乃敢与君绝。',author:'——佚名《上邪》'},
            {title:'花自飘零水自流。一种相思，两处闲愁。',author:'——李清照《一剪梅·红藕香残玉簟秋》'},
            {title:'怕相思，已相思，轮到相思没处辞，眉间露一丝。',author:'——俞彦《长相思·折花枝》'},
           
        ]
      }
    },
     computed: {
      noMore () {
        return this.count >= 1
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 1
          this.loading = false
        }, 5000)
      }
    }
}
</script>

<style lang="stylus" scoped>
.logo{
    text-align left 
    margin-top 20px
    height 120px
    width 100%
    background-color #f4f6f9
    border-radius 5px 5px 0 0
    display flex
}
.logo img{
    margin-left 50px
    border-radius 50%
}
.logo span{
    height 50px
    line-height 50px
    font-size 30px
    margin 60px 0 0 20px
}
.header{
    height 40px
    width 100%
    border-radius 0 0 5px 5px
    background-color #ebeef2
    text-align left 
    
}
.header .el-input{
    margin-left 40%
    width 20%
}
.header span{
    line-height 40px
    margin-left 5%
    cursor pointer
}
.main{
    height 350px
    width 100% 
    // background-color red
    box-sizing border-box
    position relative
    }
.main .main-left{
    height 60px
    width 7%
    // background-color white
    position absolute
    top 20px

} 
.main .main-right{
    height 340px
    width 90%
    background-color #ffffff
    position absolute
    top 20px
    left 9%
}
</style>