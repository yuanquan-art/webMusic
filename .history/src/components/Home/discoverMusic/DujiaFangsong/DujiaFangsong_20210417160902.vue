<template>
    <div>
        <div class="dujiaSendParent">
            <el-container>
    <el-aside width="600px">
        <p class="mvxq">
         &lt; MV详情
        </p>
        <!-- 视频 -->
        <VideoPlayer  class="video-player vjs-custom-skin"
     ref="videoPlayer"
     :playsinline="true"
     :options="playerOptions"
></VideoPlayer>
    </el-aside>
    <el-main>相关推荐</el-main>
  </el-container>
        </div>
    </div>
</template>

<script>
import { VideoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
export default {
    data(){
        return {
        playerOptions : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          src: '//path/to/video.mp4',  // 路径
          type: 'video/mp4'  // 类型
        }, {
          src: '//path/to/video.webm',
          type: 'video/webm'
        }],
        poster: "../../static/images/test.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
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
    components: {
    VideoPlayer
    },
    created(){
        console.log(this.$route.query.id)
     this.getVideoXQ();
    },
    methods: {
      //获取相关视频
    async getVideoXQ(){
        console.log(this.$route.query.id)
          const {data:res} = await this.$axios.get('http://localhost:3000/related/allvideo?id='+this.$route.query.id);
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