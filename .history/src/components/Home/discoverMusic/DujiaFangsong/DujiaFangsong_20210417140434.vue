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
     console.log(this.$route.query.id)
    },
    methods: {
      //获取MV视频详情
      getVideoXQ(){
          const {data:res} = await this.$axios.get('http://localhost:3000/');
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