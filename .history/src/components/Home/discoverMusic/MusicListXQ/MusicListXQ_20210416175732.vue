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
              <span class="musicname">{{ musicListXQ.name }}</span>
            </p>
            <p>
                 <img :src="musicListXQCreator.avatarUrl" alt="" width="25" height="25" class="avatarUrl">
                 <span class="nickname">{{ musicListXQCreator.nickname }}</span>
                 <span>{{ time }}创建</span>
             </p>
             <p>
                 <span class="quanbubofang">全部播放</span>
                 <span>收藏({{ parseInt(musicListXQ.subscribedCount/10000) }})万</span>
             </p>
             <p>
                 标签：{{ tags }}
             </p>
             <p>
                 歌曲:{{ musicListXQ.trackCount}}
                 播放： {{ parseInt(musicListXQ.playCount/10000) }}万
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
      },
      time: function(){
        return this.timestampToTime(this.musicListXQ.createTime); 
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
    timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate() + ' ';
    // h = date.getHours() + ':';
    // m = date.getMinutes() + ':';
    // s = date.getSeconds();
    return Y-M-D;
}
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
    border-radius: 2px;
    color: red;
  }
  .avatarUrl{
        border-radius: 50%;
    }
    .nickname{
        font-size: 8px;
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
      .musicname{
          font-size: 20px;
          font-weight: 700;
      }
  }
}
</style>
