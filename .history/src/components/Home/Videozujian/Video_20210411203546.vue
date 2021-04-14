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
      ],
      {"code":200,"result":{"hots":[{"first":"还是会想你","second":1,"third":null,"iconType":1},{"first":"大悲咒","second":1,"third":null,"iconType":1},{"first":"Us2","second":1,"third":null,"iconType":1},{"first":"星辰大海","second":1,"third":null,"iconType":1},{"first":"2002","second":1,"third":null,"iconType":1},{"first":"只是长胖","second":1,"third":null,"iconType":1},{"first":"溯","second":1,"third":null,"iconType":1},{"first":"爱就一个字","second":1,"third":null,"iconType":1},{"first":"失眠城市","second":1,"third":null,"iconType":1},{"first":"起风了","second":1,"third":null,"iconType":1}]}}
    };
  },
  created() {
      //this.getVideoGategroyList();
      //this.getGategroyList();
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
    async getGategroyList(){
          const {data:res} = await this.$axios.get('/video/group?id='+this.activeVideoName+'&timestamp='+ new Date());
    },
    async handleClick(){
       
    }
  },
};
</script>

<style lang="less" scoped>

</style>
