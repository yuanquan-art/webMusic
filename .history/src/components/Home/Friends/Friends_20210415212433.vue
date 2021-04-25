<template>
    <div>朋友</div>
</template>

<script>
export default {
    data(){
        return {}
    },
    created(){
        this.getDongtaiMessage()
    },
    methods: {
      // 获取动态消息
      async getDongtaiMessage(){
          const {data:res} = await this.$axios.get('http:localhost:3000/event?pagesize=30');
          console.log(res)
      }
    }
}
</script>

<style lang="less" scoped>

</style>