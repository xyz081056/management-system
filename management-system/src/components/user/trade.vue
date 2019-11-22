<template>
    <div class="trade">
      <div style="display:flex;margin:10px 0 5px 0; width:100%">
        <el-input placeholder="请输入要搜索的商品名的关键字" style="width:20%;margin:0 30% 0 10% "></el-input>
        <el-button type="danger"  style="height:40px">
            <i class="el-icon-plus"></i>
            <span>发布闲置</span>
        </el-button>
        <el-button type="primary"  style="height:40px">
            <i class="el-icon-table-lamp"></i>
            <span>我的闲置</span>
        </el-button>
        <el-button type="success"  style="height:40px">
            <i class="el-icon-shopping-cart-full"></i>
            <span>购物车</span>
        </el-button>
      </div>
      <hr>
      <div v-infinite-scroll="load" 
      infinite-scroll-disabled="disabled" 
      style="overflow:auto;height:450px;margin-top:20px">
        <!-- <ul v-for="i in count" :key="i"> -->
          <ul v-for="item in img" :key="item.id">
          <li >
            <img :src="item.url" style="width:120px;height:160px">
            <p>价格：{{ item.price }}</p>
            <p>发布人：{{ item.owner }}</p>
            <p>物品名称：{{ item.name }}</p>
            <p>联系方式：{{ item.phone }}</p>
          </li>
          <li>
            <img :src="item.url" style="width:120px;height:160px">
            <p>价格：{{ item.price }}</p>
            <p>发布人：{{ item.owner }}</p>
            <p>物品名称：{{ item.name }}</p>
            <p>联系方式：{{ item.phone }}</p>
          </li>
        </ul>
        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
      </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        count: '',
        loading: false,
        img:[
          {
            id:1,
            url:require("../../assets/beaut1.jpg"),
            price:'100元',
            owner:'张三',
            name:'自行车',
            phone:15899637594
          },
          {
            id:2,
            url:require("../../assets/beaut2.jpg"),
            price:'500元',
            owner:'张三',
            name:'自行车',
            phone:15899637594
          },
          {
            id:3,
            url:require("../../assets/beaut.jpg"),
            price:'看缘分',
            owner:'张三',
            name:'女朋友',
            phone:15899637594
          },
          {
            id:4,
            url:require("../../assets/beaut1.jpg"),
            price:'30元',
            owner:'张三',
            name:'自行车',
            phone:15899637594
          },
          {
            id:5,
            url:require("../../assets/beaut2.jpg"),
            price:'60元',
            owner:'张三',
            name:'自行车',
            phone:15899637594
          },
          {
            id:6,
            url:require("../../assets/beaut3.jpg"),
            price:'300元',
            owner:'张三',
            name:'自行车',
            phone:15899637594
          },
        ],
      }
    },
    created(){
      this.count = this.img.length
    },
     computed: {
      noMore () {
        return this.count >= this.img.length
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
        }, 1000)
      }
    }
}
</script>

<style lang="stylus" scoped>
ul{
  height :200px;
  width 100%
  // background-color red
  display flex
  list-style none
  padding 0
}
ul li{
  height 180px
  width 40%
  background-color #FFFFFF
  border black 1px solid
  box-shadow:#e4e4e4 10px 10px;
  border-radius:5px;
  margin 10px 0 0 7%
  position relative
}
ul li img {
  position absolute
  left 15px
  margin:10px 10px 0 20px
}
ul li p{
  text-align left 
  margin:21px 0 0 200px
}
</style>

