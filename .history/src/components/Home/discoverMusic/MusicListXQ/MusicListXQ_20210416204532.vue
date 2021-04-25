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
              <img
                :src="musicListXQCreator.avatarUrl"
                alt=""
                width="25"
                height="25"
                class="avatarUrl"
              />
              <span class="nickname">{{ musicListXQCreator.nickname }}</span>
              <span class="time">{{ time }}创建</span>
            </p>
            <p>
              <span class="quanbubofang">全部播放</span>
              <span class="quanbubofang"
                >收藏({{
                  parseInt(musicListXQ.subscribedCount / 10000)
                }})万</span
              >
            </p>
            <p class="nickname">标签：{{ tags }}</p>
            <p class="nickname">
              歌曲:{{ musicListXQ.trackCount }} 播放：
              {{ parseInt(musicListXQ.playCount / 10000) }}万
            </p>
            <p class="jianjie">简介： {{ musicListXQ.description }}</p>
          </el-main>
        </el-container>
      </el-header>
      <!-- 主体 -->
      <el-main>
           <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="歌曲列表" name="first">
        <!-- 音乐列表 -->
    <el-table
    :data="musicTracks"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="like"
      width="180"
      @cell-click="love">
       <i class="iconfont iconwodeshoucang"></i>
    </el-table-column>
    <el-table-column
      prop="name"
      label="音乐标题"
      sortable
      width="180"
      @cell-click="love"
      >
    </el-table-column>
    <el-table-column
      prop="ar[0].name"
      label="歌手"
      sortable
>
    </el-table-column>
  </el-table>

    </el-tab-pane>
    <el-tab-pane label="歌曲评论" name="second">歌曲评论</el-tab-pane>
    <el-tab-pane label="收藏者" name="third">收藏者</el-tab-pane>
  </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //tabs默认激活
      activeName: 'first',
      // 歌单详情信息
      musicListXQ: {},
      musicListXQCreator: {},
      musicListXQTags: {},
      musicTracks: []
    };
  },
  created() {
    this.getMusicListXQ();
  },
  computed: {
    tags: function() {
      return this.musicListXQTags.toString();
    },
    time: function() {
      return new Date(parseInt(this.musicListXQ.createTime))
        .toLocaleString()
        .replace(/:\d{1,2}$/, " ");
    },
  },
  methods: {
    // 获取歌单详情
    async getMusicListXQ() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/playlist/detail/dynamic?id=" +
          this.$route.query.id
      );
      console.log(res);
      this.musicListXQ = res.playlist;
      //追加每一首个的like属性
      this.musicListXQ.tracks.forEach(element => {
          element.like = false;
      });
      this.musicTracks =this.musicListXQ.tracks;
      this.musicListXQCreator = res.playlist.creator;
      this.musicListXQTags = res.playlist.tags;
    },
    // 是否喜欢
    love(val){
        console.log(val)
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
  .avatarUrl {
    border-radius: 50%;
  }
  .nickname {
    font-size: 8px;
    margin-left: 5px;
  }
  .time {
    color: #ccc;
    margin-left: 5px;
    font-size: 8px;
  }
  .quanbubofang {
    display: inline-block;
    margin-right: 20px;
    background-color: red;
    line-height: 30px;
    font-size: 15px;
    width: 100px;
    height: 30px;
    border-radius: 110px;
    text-align: center;
  }
  .biaotiMessage {
    margin: 0 !important;
    padding: 0 0 0 20px !important;
    p {
      margin: 10px;
      line-height: 16px;
    }
    .musicname {
      font-size: 20px;
      font-weight: 700;
    }
    .jianjie {
      font-size: 8px;
      margin-left: 9px;
      display: block;
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
