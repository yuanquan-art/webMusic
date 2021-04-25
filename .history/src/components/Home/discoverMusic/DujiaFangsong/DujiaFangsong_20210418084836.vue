<template>
  <div>
    <div class="dujiaSendParent">
      <el-container>
        <el-aside width="600px">
          <p class="mvxq">
            &lt; MV详情
          </p>
          <div class="shipingView">播放视频</div>
          <!-- 视频信息区域 -->
          <el-container>
            <el-header class="mvInfoHeader">
               <img :src="mvXQdata.cover" alt="" class="mvXQimg">
               <span>11</span>
            </el-header>
            <el-main>Main</el-main>
          </el-container>
        </el-aside>
        <el-main>相关推荐</el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // mv详情数据
      mvXQdata: {},
    };
  },
  created() {
    console.log(this.$route.query.id);
    this.getVideoXQ();
  },
  methods: {
    //获取mv详情
    async getVideoXQ() {
      console.log(this.$route.query.id);
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/mv/detail?mvid=" + this.$route.query.id
      );
      console.log(res);
      this.mvXQdata = res.data;
    },
  },
};
</script>

<style lang="less" scoped>
.dujiaSendParent {
  width: 900px;
  margin: 0 auto;
  .mvxq {
    font-size: 20px;
    font-weight: 700;
  }
  .shipingView {
    background-color: rgb(22, 236, 219);
    width: 600px;
    height: 350px;
  }
  .mvInfoHeader{
    margin-top: 20px;
    .mvXQimg{
   width: 50px;
   height: 50px;
   border-radius: 50%;
   }
  }
 
}
</style>
