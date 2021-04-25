<template>
  <div>
    <el-container>
      <el-header>
        <el-container>
          <el-aside width="200px">
              <img :src="musicListXQ.playlist" alt="">
          </el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
        // 歌单详情信息
        musicListXQ: {}
    };
  },
  created() {
    this.getMusicListXQ();
  },
  methods: {
    // 获取歌单详情
    async getMusicListXQ() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/playlist/detail/dynamic?id=" +
          this.$route.query.id
      );
      console.log(res);
      this.musicListXQ = res;
    },
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: rgb(19, 224, 243);
  height: 200px !important;
}
</style>
