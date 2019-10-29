<template>
<div>
  <p>你好 ： {{ tableData }}</p>
</div>
</template>

<script>
export default {
  data(){
    return{
        tableData:'',
    }
  },
  methods:{
    get(){
      this.tableData = this.$route.params.name
    },
  },
   mounted(){
      this.get()
   }
}
</script>

<style lang="stylus" scoped>

</style>