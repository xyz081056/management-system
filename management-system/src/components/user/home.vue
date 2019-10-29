<template>
  <div class="userHome">
      <p>你好，用户</p>
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
      this.tableData = this.$route.query.name
    },
  },
   mounted(){
      this.get()
   }
}
</script>

<style>

</style>