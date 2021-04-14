<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="视频" name="first">
          <el-tabs v-model="activeVideoName" @tab-click="handleClick">
            <el-tab-pane
              v-for="(item,index) in videoGategroyList"
              :label="item.name"
              :name="item.id"
              :key="index"
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
      // 视频分类列表id
     activeVideoName: "58100",
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
      //this.getGategroyList();
      this.getHotSearchList();
  },
  methods: {
    // 获取视频分类列表
    async getVideoGategroyList() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/video/category/list?timestamp=" + new Date()
      );
      console.log(res);
    },
    //获取视频标签/分类下的视频
    async getGategroyList(){
          const {data:res} = await this.$axios.get('http://localhost:3000/video/group?id='+this.activeVideoName+'&timestamp='+ new Date());
    },
    async handleClick(){
       
    },
     // 获取热搜列表 
    async getHotSearchList() {
      const { data: res } = await axios.get('http://localhost:5000/search/hot');
      console.log(res)
    }
  },
};
</script>

<style lang="less" scoped>

</style>
