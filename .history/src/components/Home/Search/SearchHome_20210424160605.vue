<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        :label="item.type"
        :name="item.id"
        v-for="(item, index) in searchTypeList"
        :key="index"
      >
        <!-- 单曲 -->

        <div v-if="activeName == 1">
          <!-- 音乐列表 -->
          <el-table
            :data="searchMusicList.songs"
            @cell-click="love"
            @row-dblclick="dbBofang"
            style="width: 100%"
            :default-sort="{ prop: 'date', order: 'descending' }"
          >
            <el-table-column prop="like" width="80">
              <i class="iconfont iconwodeshoucang"></i>
            </el-table-column>
            <el-table-column prop="name" label="音乐标题" sortable width="300">
            </el-table-column>
            <el-table-column
              prop="ar[0].name"
              label="歌手"
              sortable
              width="300"
            >
            </el-table-column>
            <el-table-column prop="al.name" label="专辑" sortable>
            </el-table-column>
          </el-table>
        </div>
        <!-- 专辑 -->
        <div v-else-if="activeName == 10">
          <div>
            <div
              v-for="(item, index) in searchMusicList.albums"
              :key="index"
              class="hiddened"
            >
              <img :src="item.picUrl" alt="" />
              <span class="hiddenName">{{ item.name }}</span>
              <span class="artistsName">{{ item.artists[0].name }}</span>
              <span class="size"> {{ item.size }}首 </span>
            </div>
          </div>
        </div>
        <!-- 歌手 -->
        <div v-else-if="activeName == 100">
          <div
            v-for="(item, index) in searchMusicList.artists"
            :key="index"
            class="hiddened"
          >
            <img :src="item.picUrl" alt="" />
            <span class="hiddenName">{{ item.name }}</span>
            <span class="artistsName">专辑：{{ item.albumSize }}</span>
            <span class="size"> mv： {{ item.mvSize }}首 </span>
          </div>
        </div>
        <!-- 歌单 -->
        <div v-else-if="activeName == 1000">
          <div
            v-for="(item, index) in searchMusicList.playlists"
            :key="index"
            class="hiddened"
          >
            <img :src="item.coverImgUrl" alt="" />
            <span class="hiddenName">{{ item.name }}</span>
            <span class="size">{{ item.creator.nickname }}</span>
            <span class="artistsName"> mv： {{ item.trackCount }}首 </span>
          </div>
        </div>
        <!-- 用户 -->
        <div v-else-if="activeName == 1002">
          <div
            v-for="(item, index) in searchMusicList.userprofiles"
            :key="index"
            class="hiddened"
          >
            <img :src="item.avatarUrl" alt="" />
            <span class="hiddenName">{{ item.nickname }}</span>
          </div>
        </div>
        <!-- MV -->
        <div v-else-if="activeName == 1004">
          <div class="gedanParent">
            <div>
              <!-- 热门歌单分类 -->
              <div id="remenMusicListGategory">
                <div>
                  <!-- Tabs标签切换 -->
                  <!-- 网友精选碟展示 -->
                  <div class="tjmusic">
                    <div
                      class="musicList"
                      v-for="(item, index) in searchMusicList"
                      :key="index"
                      @click="toMVbofang(item.id)"
                    >
                      <img :src="item.cover" alt="" />
                      <span>{{ item.name }}</span>
                    </div>
                  </div>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="activeName == 1006">
          777777777
        </div>
        <div v-else-if="activeName == 1009">
          888888888888
        </div>
        <div v-else-if="activeName == 1014">
          9999999999
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      // 默认激活tabs
      activeName: 1,
      // 搜索类型列表
      searchTypeList: [],
      // 搜索歌曲列表
      searchMusicList: [],
      //传入vuex歌曲对象参数
      musicObjParams: {
        title: "",
        author: "",
        url: "",
        pic: "",
        lrc: "",
      },
    };
  },
  created() {
    this.getSearchType();
    //获取Home组件传的state_value参数
    this.getStateValue("", "");
  },
  computed: {
    // 从Home组件获取的stateValue
    stateValue() {
      return this.$store._state.data.songsName;
    },
  },
  watch: {
    stateValue: function(val) {
      this.getStateValue(val, "");
    },
  },
  methods: {
    async getStateValue(val, type) {
      const { data: res } = await this.$axios.post(
        "http://localhost:3000/cloudsearch?keywords=" +
          (val ? val : this.stateValue) +
          (type ? "&type=" + type : "")
      );
      // console.log(res);
      this.searchMusicList = res.result;
      console.log(this.searchMusicList);
    },
    // 获取搜索歌曲类型
    async getSearchType() {
      const { data: res } = await this.$axios.get("/api/search/type");
      this.searchTypeList = res;
      // console.log(res);
    },
    handleClick() {
      this.getStateValue("", this.activeName);
    },
    // 双击播放音乐
    async dbBofang(row) {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/song/url?id=" + row.id
      );
      const { data: lrc } = await this.$axios.get(
        "http://localhost:3000/lyric?id=" + row.id
      );
      this.musicObjParams.lrc = lrc.lrc.lyric;
      this.musicObjParams.title = row.name;
      this.musicObjParams.author = row.ar[0].name;
      this.musicObjParams.pic = row.al.picUrl;
      this.musicObjParams.url = res.data[0].url;
      // console.log(this.musicObjParams)
      this.$store.commit("addMusic", this.musicObjParams);
    },
    // 是否喜欢
    async love(row, column, cell, event) {
      if (row.like == false) {
        row.like = true;
        cell.childNodes[0].childNodes[2].style.color = "#41E6EC";
        //  const {data:res} = await this.$axios.get('http://localhost:3000/like?id='+row.id+'&like'+row.like+'&timestamp='+new Date());
        //  console.log(res)
      } else {
        row.like = false;
        cell.childNodes[0].childNodes[2].style.color = "";
        //   const {data:res} = await this.$axios.get('http://localhost:3000/like?id='+row.id+'&like'+row.like+'&timestamp='+new Date());
        //  console.log(res)
      }

      //console.log(cell.childNodes[0].childNodes[2])
    },
  },
};
</script>

<style lang="less" scoped>
// 收藏
.singleUl {
  li {
    list-style: none;
    height: 50px;
  }
}
// 专辑
.hiddened {
  height: 80px;
  margin: 20px 0 20px 0;
  border-radius: 5px;
  position: relative;
  img {
    height: 60px;
    width: 60px;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 50px;
  }
  .hiddenName {
    position: absolute;
    top: 32px;
    left: 130px;
  }
  .artistsName {
    position: absolute;
    top: 32px;
    left: 600px;
  }
  .size {
    position: absolute;
    top: 32px;
    left: 1000px;
  }
}
.hiddened:hover {
  background-color: rgb(214, 209, 209);
}
// MV
.gedanParent {
  margin: 0 auto 50px auto;
  width: 1100px;
  #remenMusicListGategory {
    .tjmusic {
      display: flex;
      flex-wrap: wrap;
      // 音乐推荐
      .musicList {
        width: 247px;
        height: 200px;
        margin-top: 10px;
        margin-right: 20px;
        margin-bottom: 60px;
        img {
          width: 240px;
          height: 200px;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
