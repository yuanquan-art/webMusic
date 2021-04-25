<template>
  <div>
    <div class="privateParent">
      <div class="musicInfo">
        <div class="lunbotu" ref="lunbotu">
          <el-carousel :interval="400" type="card" height="200px">
            <el-carousel-item v-for="item in fmData" :key="item.id">
              <img
                :src="item.album.blurPicUrl"
                alt=""
                width="300"
                height="200"
              />
            </el-carousel-item>
          </el-carousel>
        </div>
          <div class="musicXXInfo">
                  111111
                <p>111111</p>
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
      fmData: [],
    };
  },
  created() {
    this.getPersonalFM();
    this.getInfo();
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
    getInfo(){
        console.log(this.$refs.lunbotu)
    }
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
     position: relative;
    .lunbotu {
      width: 400px;
      background: red;
      overflow: hidden;
      /deep/ .el-carousel__container {
        width: 629px;
      }
      /deep/ .el-carousel__arrow--right {
        position: fixed;
        top: 370px;
        right: 814px;
        z-index: 9999;
        display: block !important;
      }
      /deep/ .el-carousel__arrow--left {
        display: none;
      }
      /deep/ .el-carousel__indicators--outside {
        display: none;
      }
      img {
        border-radius: 7px;
      }
     
    }
     .musicXXInfo{
          position: absolute;
          top:0;
          right: -400px;
          width: 400px;
          height: 200px;
          background-color: blue;
          z-index: 999999;
      }
  }
}
</style>
