<template>
  <div>
    <el-container>
      111111111
      <!-- 头部 -->
      <el-header>
        <el-container>
          <el-aside width="200px">
            <img
              :src="musicListXQ.coverImgUrl"
              alt=""
              width="200"
              height="200"
              class="musicImg"
            />
          </el-aside>
          <!-- 标题部分 -->
          <el-main>
            <p>
              <span class="gedanspan">歌单</span>
              <span>{{ musicListXQ.name }}</span>
            </p>
            <!-- <p>
                 <img :src="musicListXQ.playlist.creator.avatarUrl" alt="" width="10px" height="10px">
                 <span>{{ musicListXQ.playlist.creator.nickname }}</span>
             </p> -->
          </el-main>
        </el-container>
      </el-header>
      <!-- 主体 -->
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 歌单详情信息
      musicListXQ: {},
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
    this.musicListXQ = res.playlist;
    },
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: rgb(19, 224, 243);
  height: 200px !important;
  .musicImg {
    border-radius: 5px;
  }
  .gedanspan {
    border: red solid 1px;
  }
}
</style>
