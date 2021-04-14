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
          <div v-if="activeName==1">
              <ul>
                <li v-for="(item,index) in searchMusicList.result.songs" :key="index" @click="handleSingleMusicList($event,index)">
                  {{
                  item.name
                  }}
                  </li>
              </ul>
          </div>
          <div v-else-if="activeName==10">
            222222222
          </div>
          <div v-else-if="activeName==100">
            333333333333
          </div>
          <div v-else-if="activeName==1000">
            44444444
          </div>
          <div v-else-if="activeName==1002">
            5555555555
          </div>
          <div v-else-if="activeName==1004">
            6666666666
          </div>
          <div v-else-if="activeName==1006">
            777777777
          </div>
          <div v-else-if="activeName==1009">
            888888888888
          </div>
          <div v-else-if="activeName==1014">
            9999999999
          </div>
        </el-tab-pane
      >
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
        title: '',
        author: '',
        url: '',
        pic: '',
        lrc: ''
      }
    };
  },
  created() {
    //获取Home组件传的state_value参数
    this.getStateValue("", "");
    this.getSearchType();
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
      console.log(res);
      this.searchMusicList = res;
    },
    // 获取搜索歌曲类型
    async getSearchType() {
      const { data: res } = await this.$axios.get("/api/search/type");
      this.searchTypeList = res;
    },
    handleClick() {
      this.getStateValue("", this.activeName);
    },
    // 点击单曲列表播放音乐
    handleSingleMusicList(e,index){
      console.log(this.searchMusicList.result.songs[index]);
      this.musicObjParams.name = this.searchMusicList.result.songs[index].name;
      this.musicObjParams.author = this.searchMusicList.result.songs[index].ar[0].name;
      this.musicObjParams.pic = this.searchMusicList.result.songs[index].al.picUrl;
      console.log(this.musicObjParams)
      this.$store.commit('addMusic',this.musicObjParams);
      console.log(this.$store.state.musiclist)
    }
  },
};
</script>

<style lang="less" scoped></style>
