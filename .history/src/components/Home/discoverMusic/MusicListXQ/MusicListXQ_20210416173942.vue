<template>
  <div>
    <el-container>
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
          <el-main class="biaotiMessage">
            <p>
              <span class="gedanspan">歌单</span>
              <span>{{ musicListXQ.name }}</span>
            </p>
            <p>
                 <img :src="musicListXQCreator.avatarUrl" alt="" width="25" height="25" class="avatarUrl">
                 <span>{{ musicListXQCreator.nickname }}</span>
             </p>
             <p>
                 <span class="quanbubofang">全部播放</span>
                 <span>收藏({{ musicListXQ.subscribedCount/10000 }})万</span>
             </p>
             <p>
                 标签：{{ tags }}
             </p>
             <p>
                 歌曲:{{ musicListXQ.trackCount}}
                 播放： {{ musicListXQ.playCount/10000 }}万
             </p>
             <p>
                 {{ musicListXQ.description }}
             </p>
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
      musicListXQCreator: {},
      musicListXQTags: {}
    };
  },
  created() {
    this.getMusicListXQ();
  },
  computed:{
      tags:function(){
          return this.musicListXQTags.toString();
      }
  },
  methods: {
    // 获取歌单详情
    async getMusicListXQ() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/playlist/detail/dynamic?id=" +
          this.$route.query.id
      );
      console.log(res)
    this.musicListXQ = res.playlist;
    this.musicListXQCreator = res.playlist.creator;
    this.musicListXQTags = res.playlist.tags;
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
  .avatarUrl{
        border-radius: 50%;
    }
    .quanbubofang{
        margin-right: 20px;
    }
     .biaotiMessage{
      margin: 0 !important;
      padding: 0 0 0 20px !important;
      p{
       margin: 10px;    
      }
  }
}
</style>
