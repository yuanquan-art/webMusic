<template>
  <div>
    <div class="gedanParent">
      <div>
        <a href="#">
          <img src="../../../assets/images/jingpingedan.jpg" alt="" />
        </a>
        <!-- 热门歌单分类 -->
        <div id="remenMusicListGategory">
          <div class="gedanFenleiMing">{{ activeName }}</div>
          <div>
            <!-- Tabs标签切换 -->
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane
                :label="item.name"
                :name="item.name"
                v-for="item in hotMusicListGategroy"
                :key="item.id"
              >
                <!-- 网友精选碟展示 -->
                <div class="tjmusic">
                  <div
                    class="musicList"
                    v-for="item in netFriengdsSpecilMusic"
                    :key="item.id"
                  >
                    <img :src="item.coverImgUrl" alt="" />
                    <span>{{ item.name }}</span>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Tabs激活默认
      activeName: "华语",
      // 热门歌单分类列表
      hotMusicListGategroy: [],
      // 获取网友精选碟
      netFriengdsSpecilMusic: [],
    };
  },
  created() {
    this.getHotMusicListGategroy();
    this.getNetFriengdsSpecilMusic();
  },
  methods: {
    // 获取热门歌单分类
    async getHotMusicListGategroy() {
      const { data: res } = await this.$axios.get("/playlist/hot");
      this.hotMusicListGategroy = res.tags;
    },
    // 获取网友精选碟
    async getNetFriengdsSpecilMusic() {
      const { data: res } = await this.$axios.get("/top/playlist");
      console.log(res);
      this.netFriengdsSpecilMusic = res.playlists;
    },
  },
};
</script>

<style lang="less" scoped>
.gedanParent {
  display: flex;
  justify-content: center;
  #remenMusicListGategory {
    .el-tab-pane{
      .tjmusic{
       display: flex;
       flex-wrap: wrap;
        // 音乐推荐
      .musicList {
      width: 200px;
      height: 200px;
      margin-top: 10px;
      margin-right: 20px;
      margin-bottom: 40px;
      img {
        width: 200px;
        height: 200px;
        margin-bottom: 5px;
      }
    }
      }
    }
    
  }
}
</style>
