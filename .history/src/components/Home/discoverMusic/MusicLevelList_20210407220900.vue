<template>
  <div>
    <div class="musicLevelListParent">
      <!-- 官方榜 -->
      <div class="guangfang">
        <div class="guangfangBang">官方榜</div>
        <div
          class="guangfangBuju"
          v-for="(item, index) in guangfangbangList"
          :key="index"
        >
          <img class="GFbangdanItemPic" :src="item.coverImgUrl" alt="" />
          <ul class="guangfanRight">
            <li
              class="bdmusicList"
              v-for="(item, index) in biaoshengBangFiveList"
              :key="index"
            >
              <span>{{ item.name }}</span>
              <span class="right">{{ item.ar[0].name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 全球榜 -->
      <div class="global">
        <div class="guangfangBang">全球榜</div>
        <div class="quanqiuBuju">
          <div
            class="quanqiuBujuItem"
            v-for="(item, index) in gloabalList"
            :key="index"
          >
            <img class="GFbangdanItemPic" :src="item.coverImgUrl" alt="" />
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
      // 所有榜单内容摘要
      ManyLevelContentList: [],
      // 官方榜list
      guangfangbangList: [],
      // 全球榜list
      gloabalList: [],
      //飙升榜歌单前5项
      biaoshengBangFiveList: [],
      //飙升榜歌单列表
      biaoshengBangList: [],
      //新歌榜歌单前5项
      xingeBangFiveList: [],
      //新歌榜歌单列表
      xingeBangList: [],
      //原创榜歌单前5项
      yuanchuangBangFiveList: [],
      //原创榜歌单列表
      yuanchuangBangList: [],
      //热歌榜歌单前5项
      hotMusicBangFiveList: [],
      //热歌榜歌单列表
      hotMusicBangList: [],
    };
  },
  created() {
    this.getManyLevelContent();
  },
  methods: {
    // 获取所有榜单内容摘要
    async getManyLevelContent() {
      const { data: res } = await this.$axios.get("/toplist/detail");
      const resGedanList = res.list;
      for (let i = 0; i < 4; i++) {
        this.guangfangbangList.push(resGedanList[i]);
      }
      for (let i = 4; i < resGedanList.length - 1; i++) {
        this.gloabalList.push(resGedanList[i]);
      }
      //获取飙升榜歌单前5项
      const { data: b1 } = await this.$axios.get(
        "/top/list?id=" + this.guangfangbangList[0].id
      );
      for (let i = 0; i < 5; i++) {
        this.biaoshengBangFiveList.push(b1.playlist.tracks[i]);
      }
      console.log(this.biaoshengBangFiveList);
    },
  },
};
</script>

<style lang="less" scoped>
.musicLevelListParent {
  width: 1100px;
  margin: 0 auto;
  .guangfangBang {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .guangfangBuju {
    position: relative;
    margin-bottom: 20px;
    .GFbangdanItemPic {
      width: 180px;
      height: 180px;
    }
    .guangfanRight {
      margin-left: 30px;
      position: absolute;
      top: 0;
      left: 200px;
      text-decoration: none;
      width: 800px;
      .bdmusicList {
        .right {
          float: right;
        }
      }
    }
  }
  .quanqiuBuju {
    display: flex;
    flex-wrap: wrap;
    .quanqiuBujuItem {
      .GFbangdanItemPic {
        width: 180px;
        height: 180px;
      }
    }
  }
}
</style>
