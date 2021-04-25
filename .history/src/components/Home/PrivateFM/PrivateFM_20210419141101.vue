<template>
  <div>
    <div class="privateParent">
      <div class="bofang"></div>
      <div class="musicInfo">
        <div class="lunbotu" ref="lunbotu">
          <el-carousel
            :interval="4000"
            type="card"
            height="200px"
            @change="handleIndex"
          >
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
          <p class="musicName">{{ musicName.name }}</p>
          <p class="geshouInfo">
            <span>专辑：{{ musicNameAlbum.name }}</span>
            <span>歌手:{{ musicNameArtists }}</span>
          </p>
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
      // 页面歌名
      musicName: {},
      musicNameAlbum: {},
      musicNameArtists: [],
      //歌词
      lrc: {},
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
  //   watch: {
  //       indexVal: function(val){
  //          console.log(val)
  //       }
  //   },
  created() {
    this.getPersonalFM();
  },
  methods: {
    // 获取私人FM
    async getPersonalFM(val) {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/personal_fm"
      );
      //   console.log(res);
      this.fmData = res.data;
      this.musicName = res.data[val ? val : 0];
      this.musicNameAlbum = res.data[val ? val : 0].album;
      this.musicNameArtists = res.data[val ? val : 0].artists[0].name;
       // 获取歌词
      // const { data: musicWord } = await this.$axios.get(
      //   "http://localhost:3000/lyric?id=" + res.data[val ? val : 0].id
      // );
      //  console.log(musicWord);
      this.dbBofang(res.data[val ? val : 0].id, res.data[val ? val : 0]);
    },
    handleIndex(index) {
      this.getPersonalFM(index);
    },
    // 点击播放音乐
    async dbBofang(val, row) {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/song/url?id=" + val
      );
     
    //  this.musicObjParams.lrc =lrc; 
      this.musicObjParams.title = row.album.name;
      this.musicObjParams.author = row.album.artists[0].name;
      this.musicObjParams.pic = row.album.blurPicUrl;
      this.musicObjParams.url = res.data[0].url;
      console.log(this.musicObjParams);
      this.$store.commit("addMusic", this.musicObjParams);
    },
  },
};
</script>

<style lang="less" scoped>
.privateParent {
  width: 800px;
  margin: 0 auto;
  background-color: pink;
   .bofang{
         position: fixed;
    width: 33px;
    height: 33px;
    top: 354px;
    right: 815px;
    z-index: 9999;
    background-color: pink;
    border-radius: 50%;
      }
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
        opacity: 0;
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
    .musicXXInfo {
      position: absolute;
      top: 0;
      right: 0px;
      width: 400px;
      height: 200px;
      background-color: blue;
      z-index: 999999;
      .musicName {
        font-size: 25px;
        font-weight: 500;
        margin-left: 20px;
        margin-bottom: 10px;
      }
      .geshouInfo {
        margin-left: 20px;
        margin-top: 50px;
        span {
          display: inline-block;
          width: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
