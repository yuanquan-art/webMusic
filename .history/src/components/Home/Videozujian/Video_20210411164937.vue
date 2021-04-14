<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="视频" name="first">
        <span>{{ activeVideoName }}</span>
          <el-tabs v-model="activeVideoName" @tab-click="handleClick">
            <el-tab-pane
              v-for="(item,index) in videoGategroyList"
              :label="item.name"
              :name="item.name"
              :key="index"
              :videoGategroyListId="item.id"
              >{{ item.id }}</el-tab-pane
            >
          </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="MV" name="second">MV</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 视频 MV tabs 默认激活
      activeName: "first",
      // 视频分类tabs激活
      activeVideoName: "现场",
      // 视频分类列表id
      videoGategroyListId: 58100,
      // 视频分类列表
      videoGategroyList: [
        {
          id: 58100,
          name: "现场",
          url: null,
          relatedVideoType: "TRANSVERSE",
          selectTab: false,
          abExtInfo: null,
        },
        {
          id: 60100,
          name: "翻唱",
          url: null,
          relatedVideoType: "TRANSVERSE",
          selectTab: false,
          abExtInfo: null,
        },
        {
          id: 1101,
          name: "舞蹈",
          url: "",
          relatedVideoType: "TRANSVERSE",
          selectTab: false,
          abExtInfo: null,
        },
        {
          id: 58101,
          name: "听BGM",
          url: null,
          relatedVideoType: "TRANSVERSE",
          selectTab: false,
          abExtInfo: null,
        },
        {
          id: 1000,
          name: "MV",
          url: "",
          relatedVideoType: "TRANSVERSE",
          selectTab: false,
          abExtInfo: null,
        },
        {
          id: 2100,
          name: "生活",
          url: "",
          relatedVideoType: "TRANSVERSE",
          selectTab: false,
          abExtInfo: null,
        },
        {
          id: 2103,
          name: "游戏",
          url: "",
          relatedVideoType: "TRANSVERSE",
          selectTab: false,
          abExtInfo: null,
        },
        {
          id: 57104,
          name: "ACG音乐",
          url: null,
          relatedVideoType: "TRANSVERSE",
          selectTab: false,
          abExtInfo: null,
        },
        {
          id: 1105,
          name: "最佳饭制",
          url: "",
          relatedVideoType: "TRANSVERSE",
          selectTab: false,
          abExtInfo: null,
        },
      ]
    };
  },
  created() {
      //this.getVideoGategroyList();
  },
  methods: {
    // 获取视频分类列表
    async getVideoGategroyList() {
      const { data: res } = await this.$axios.get(
        "/video/category/list?timestamp=" + new Date()
      );
      console.log(res);
    },
    //获取视频标签/分类下的视频
    async handleClick(tab,e){
        const {data:res} = await this.$axios.get('');
        console.log(this.videoGategroyListId)
    }
  },
};
</script>

<style lang="less" scoped>

</style>
