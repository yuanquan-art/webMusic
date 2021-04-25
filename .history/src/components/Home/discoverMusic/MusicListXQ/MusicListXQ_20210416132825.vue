<template>
    <div>歌单详情</div>
</template>

<script>
export default {
    data(){
        return {}
    },
    created(){
      this.getMusicListXQ();
    },
    methods: {
        // 获取歌单详情
        getMusicListXQ(){  
           const {data:res} = await this.$axios.get('/playlist/detail/dynamic?id='+this.$route.query.id);
           console.log(res)
        }
    }
}
</script>

<style lang="less" scoped>

</style>