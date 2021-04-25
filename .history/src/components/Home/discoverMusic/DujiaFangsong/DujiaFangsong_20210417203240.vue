<template>
  <div>
    <div class="dujiaSendParent">
      <el-container>
        <el-aside width="600px">
          <p class="mvxq">
            &lt; MV详情
          </p>
          <div class="shipingView">播放视频</div>
        </el-aside>
        <el-main>相关推荐</el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
        "http://localhost:3000/mv/detail?mvid=5436712" + this.$route.query.id
      );
      console.log(res);
      console.log(this.$route)
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
}
</style>
