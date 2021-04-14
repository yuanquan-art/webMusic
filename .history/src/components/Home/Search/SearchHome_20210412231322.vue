<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        :label="item.type"
        :name="item.id"
        v-for="(item, index) in searchTypeList"
        :key="index"
        >
          <div>
              {{item.id}}
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
    },
    handleClick() {
      this.getStateValue("", this.activeName);
    },
  },
};
</script>

<style lang="less" scoped></style>
