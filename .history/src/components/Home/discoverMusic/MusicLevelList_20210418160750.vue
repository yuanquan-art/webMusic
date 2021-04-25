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
          <img class="GFbangdanItemPic" :src="item.coverImgUrl" alt="" @click="toMusicXQ(item.id)" />
          <ul class="guangfanRight">
            <li
              class="bdmusicList"
              v-for="(item, index) in biaoshengBangFiveList"
              :key="index"
            >
              <span>{{index+1}}&nbsp;{{ item.name }}</span>
              <span class="right">{{ item.ar[0].name }}</span>
            </li>
          </ul>
          <span class="viewAll">查看全部</span>
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
             <div>{{ item.name }}</div>
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
      const { data: res } = await this.$axios.get("http://localhost:3000/toplist/detail");
      const resGedanList = res.list;
      for (let i = 0; i < 4; i++) {
        this.guangfangbangList.push(resGedanList[i]);
      }
      for (let i = 4; i < resGedanList.length; i++) {
        this.gloabalList.push(resGedanList[i]);
      }
      //获取飙升榜歌单前5项
      const { data: b1 } = await this.$axios.get(
       "http://localhost:3000/playlist/detail/dynamic?id=" + this.guangfangbangList[0].id
      );
      for (let i = 0; i < 5; i++) {
        this.biaoshengBangFiveList.push(b1.playlist.tracks[i]);
      }
      console.log(this.biaoshengBangFiveList)
    },
     // 点击去歌单详情页
    toMusicXQ(id){
      this.$router.push({path: '/musicListXQ',query: {id:id }});
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
      border-radius: 5px;
    }
    .guangfanRight {
      margin-left: 30px;
      position: absolute;
      top: 0;
      left: 200px;
      text-decoration: none;
      width: 800px;
      list-style: none;
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
        margin-right: 20px;
        margin-bottom: 10px;
      .GFbangdanItemPic {
        width: 180px;
        height: 180px;
      }
    }
  }
}
</style>
