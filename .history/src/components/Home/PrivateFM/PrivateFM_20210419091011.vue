<template>
  <div>
    <div class="privateParent">
      <div class="musicInfo">
       <div class="lunbotu">
            <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in fmData" :key="item.id">
              <img :src="item.album.blurPicUrl" alt="" width="200" height="200">
          </el-carousel-item>
        </el-carousel>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        //fm数据
        fmData: []
    };
  },
  created() {
    this.getPersonalFM();
  },
  methods: {
    // 获取私人FM
    async getPersonalFM() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/personal_fm"
      );
      console.log(res);
      this.fmData = res.data;
    },
  },
};
</script>

<style lang="less" scoped>
.privateParent {
  width: 800px;
  margin: 0 auto;
  background-color: pink;
  .musicInfo {
    margin-top: 20px;
    .lunbotu{
        width: 400px;
        background: red;
    }
  }
}
</style>
