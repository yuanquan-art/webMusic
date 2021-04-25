<template>
    <div>
        <div class="dujiaSendParent">
            <el-container>
    <el-aside width="600px">
        <p class="mvxq">
         &lt; MV详情
        </p>
        <!-- 视频 -->
       <video-player  class="video-player vjs-custom-skin"
  ref="videoPlayer" 
  :playsinline="true" 
  :options="playerOptions"
  @play="onPlayerPlay($event)"
  @pause="onPlayerPause($event)"
  @ended="onPlayerEnded($event)"
></video-player>
    </el-aside>
    <el-main>相关推荐</el-main>
  </el-container>
        </div>
    </div>
</template>

<script>

export default {
   data(){
  return {
    playerOptions:{
      playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
      autoplay: false, //如果true,浏览器准备好时开始回放。
      muted: false, // 默认情况下将会消除任何音频。
      loop: false, // 导致视频一结束就重新开始。
      preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
      language: 'zh-CN',
      aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
      // fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
      sources: [{
        type: "application/x-mpegURL",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
        src: "rtmp://58.200.131.2:1935/livetv/cctv1" //url地址
      }],
      // hls:true, //如果是播放m3u8必须加（需注释掉techOrder,不然会有报错）
      techOrder: ['flash'], //播放rtmp必须加
      poster: "", //你的封面地址
      notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      controlBar: {
        timeDivider: true,
        durationDisplay: true,
        remainingTimeDisplay: false,
        fullscreenToggle: true  //全屏按钮
      }
    }
     }
   },

    created(){
        console.log(this.$route.query.id)
     this.getVideoXQ();
    },
    methods: {
      //获取相关视频
    async getVideoXQ(){
        console.log(this.$route.query.id)
          const {data:res} = await this.$axios.get('http://localhost:3000/mv/detail?mvid=5436712'+this.$route.query.id);
          console.log(res)
       }
    }
}
</script>

<style lang="less" scoped>
.dujiaSendParent{
    width: 900px;
    margin: 0 auto;
    .mvxq{
        font-size: 20px;
        font-weight: 700;
    }
    .video-js .vjs-big-play-button{}
}
</style>