<template>
    <div>
        <div class="dujiaSendParent">
            <el-container>
    <el-aside width="600px">
        <p class="mvxq">
         &lt; MV详情
        </p>
    </el-aside>
    <el-main>相关推荐</el-main>
  </el-container>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    created(){
     this.getVideoXQ();
    },
    methods: {
      //获取MV视频详情
    async getVideoXQ(){
          const {data:res} = await this.$axios.get('http://localhost:3000/video/detail?id='+this.$route.query.id);
          console.log(res)
       }
    }
}
</script>

<style lang="less" scoped>
.dujiaSendParent{
    width: 900px;
    margin: 0 auto;
    .mvxq{
        font-size: 20px;
        font-weight: 700;
    }
}
</style>