<template>
  <div class="Mainp">
    <div class="dujiaSendParent">
      <el-container>
        <el-aside width="600px">
          <p class="mvxq">
            &lt; MV详情
          </p>
          <div class="shipingView">
                <Xgplayer :config="config" @player="Player = $event"/>
          </div>
          <!-- 视频信息区域 -->
          <el-container>
            <el-header class="mvInfoHeader">
              <img :src="mvXQdata.cover" alt="" class="mvXQimg" />
              <span class="artistsName"
                >{{ mvXQdataArtistsName1 }}/{{ mvXQdataArtistsName2 }}</span
              >
            </el-header>
            <el-main class="hmain">
              <!--标题信息  -->

              <el-collapse accordion>
                <el-collapse-item>
                  <template #title class="hInfo">
                    <span>{{ mvXQdata.name }}</span>
                    <i class="iconfont iconxiajiantou"></i>
                    <p class="pos">
                      <span class="mvtime"
                        >发布：{{ mvXQdata.publishTime }}</span
                      >
                      <span class="mvcount"
                        >播放：{{
                          parseInt(mvXQdata.playCount / 10000)
                        }}万</span
                      >
                    </p>
                  </template>
                  <div>
                    <p class="mvdesc">{{ mvXQdata.desc }}</p>
                  </div>
                  <!-- <div>
                    在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                  </div> -->
                </el-collapse-item>
              </el-collapse>
              <!-- 赞  收藏 -->
              <!-- <div>
               <span>
                 <i class="iconfont iconweibiaoti-"></i>
               </span>
               <span>收藏</span>
             </div> -->
              <!-- 精彩评论 -->
              <div>
                <el-input
                  type="textarea"
                  maxlength="140"
                  resize="none"
                  max="140"
                  v-model="content"
                ></el-input>
               <span class="pinP">
                  <span @click="postPinlunContent" class="pinlunbtn">评论</span>
               </span>
                <p class="hotcomment">精彩评论</p>
                <ul class="pinglunUl">
                  <li
                    class="punlunLi"
                    v-for="(item, index) in hotComments"
                    :key="index"
                  >
                    <span>
                      <img
                        :src="item.user.avatarUrl"
                        alt=""
                        width="40"
                        height="40"
                      />
                    <div class="pinglunContent">
                         <p>
                            <span class="userNickname "
                        >{{ item.user.nickname }}:</span
                      >
                      <span >{{ item.content }}</span>
                      <span >{{ item.time }}</span>
                         </p>
                         
                    </div>
                     <span class="zan">
                      <i
                        :class="
                          item.liked
                            ? 'iconfont iconweibiaoti- biaoti'
                            : 'iconfont iconweibiaoti-'
                        "
                        @click="dianzan(item.commentId, item.liked, index)"
                        ref="zan"
                      ></i>
                      <i>{{ item.likedCount }}</i>
                      <i
                        class="iconfont iconhuifu"
                        id="huifu"
                        @click="huifu(item.user.nickname, item.commentId)"
                      ></i>
                    </span>
                    </span>
                  
                  </li>
                </ul>
                <!-- 最新评论 -->
                <p class="hotcomment">最新评论</p>
                <ul>
                  <li
                    class="punlunLi"
                    v-for="(item, index) in comments"
                    :key="index"
                  >
                    <span>
                      <img
                        :src="item.user.avatarUrl"
                        alt=""
                        width="40"
                        height="40"
                      />
                       <div class="pinglunContent">
                      <span class="userNickname"
                        >{{ item.user.nickname }}:</span
                      >
                      <span >{{ item.content }}</span>
                      <span class="shijian">{{ item.time }}</span>
                       </div>
                    </span>
                    <span class="zan">
                      <i
                        :class="
                          item.liked
                            ? 'iconfont iconweibiaoti- biaoti'
                            : 'iconfont iconweibiaoti-'
                        "
                        @click="dianzan(item.commentId, item.liked, index)"
                        ref="zan"
                      ></i>
                      <i>{{ item.likedCount }}</i>
                      <i
                        class="iconfont iconhuifu"
                        id="huifu"
                        @click="huifu(item.user.nickname, item.commentId)"
                      ></i>
                    </span>
                  </li>
                </ul>
              </div>
            </el-main>
          </el-container>
        </el-aside>
        <el-main>
          <span class="xiangguanTJ">相关推荐</span>
          <div v-for="(item,index) in tuijianData" :key="index" class="tuijianDiv">
            <img :src="item.coverUrl" alt="">
            <span>
              <p>{{ item.title }}</p>
              <p class="userName">{{item.creator[0].userName }}</p>
            </span>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';
import Xgplayer from 'xgplayer-vue';
export default {
  data() {
    return {
      // mv详情数据
      mvXQdata: {},
      mvXQdataArtistsName1: "",
      mvXQdataArtistsName2: "",
      // 热评
      hotComments: [],
      comments: [],
      content: "",
      // 推荐数据
      tuijianData: [],
         config: {
        id: 'vs',
        url: require('../../../../assets/mp4/xgplayer-demo.mp4')
      },
      Player: null
    };
  },
   components:{
    Xgplayer
  },
  created() {
    this.getVideoXQ();
    this.getMusiclistPinlun();
    this.getXiangGuanTuijianVideo();
  },
  methods: {
    //获取mv详情
    async getVideoXQ() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/mv/detail?mvid=" + this.$route.query.id
      );
      this.mvXQdata = res.data;
      this.mvXQdataArtistsName1 = this.mvXQdata.artists[0].name;
      this.mvXQdataArtistsName2 = this.mvXQdata.artists[1].name;
    },
    // 获取歌单评论
    async getMusiclistPinlun() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/comment/mv?id=" + this.$route.query.id
      );
      for (let i = 0; i < 8; i++) {
        this.hotComments.push(res.hotComments[i]);
      }
      this.hotComments.forEach((element) => {
        const time = new Date(element.time);
        element.time = `${time.getFullYear()}年${time.getMonth() +
          1}月${time.getDate()}日  ${time.getHours()}:${time.getMinutes()}`;
      });
      this.comments = res.comments;
    },
    // 发送评论
    async postPinlunContent() {
      // if (this.commentid) {
      //   const { data: res } = await this.$axios.get(
      //     "http://localhost:3000/comment?t=1&type=2&id=" +
      //       this.commentid +
      //       "&content=" +
      //       this.content
      //         .toString()
      //         .split(":")[1]
      //         .toString()
      //   );
      //   console.log(res);
      //   ElMessage.success("回复成功！");
      // } else {
      //   const { data: res } = await this.$axios.get(
      //     "http://localhost:3000/comment?t=1&type=2&id=" +
      //       this.$route.query.id +
      //       "&content=" +
      //       this.content
      //   );
      //   console.log(res);
      //   ElMessage.success("评论成功！");
      // }
      ElMessage.success('评论成功！');
    },
    // 点赞
    async dianzan(commentId, liked, index) {
      let t = 1;
      this.hotComments[index].likedCount++;
      this.$refs.zan.style.color = "red";
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/comment/like?id=2" +
          this.$route.query.id +
          "&cid=" +
          commentId +
          "&t=" +
          t +
          "&type=2"
      );
    },
    //回复
    huifu(nickname, id) {
      this.content = "回复" + nickname + ":";
      this.commentid = id;
    },
    //获取相关推荐视频
    async getXiangGuanTuijianVideo(){
      const {data:res} = await this.$axios.get('http://localhost:3000/related/allvideo?id='+this.$route.query.id);
      this.tuijianData = res.data;
      console.log(this.tuijianData)
    }
  },
};
</script>

<style lang="less" scoped>
.Mainp {
  width: 1678px;
  height: 800px;
  overflow-y: scroll;
}
.dujiaSendParent {
  width: 900px;
  margin: 0 auto;
  .mvxq {
    font-size: 20px;
    font-weight: 700;
  }
  .shipingView {
    background-color: rgb(22, 236, 219);
    width: 600px;
    height: 350px;
  }
  .mvInfoHeader {
    margin-top: 20px;
    position: relative;
    .mvXQimg {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .artistsName {
      margin-left: 20px;
      position: absolute;
      top: 14px;
      left: 70px;
      font-size: 12px;
    }
  }
  .pos {
    position: absolute;
    left: 0;
    top: 13px;
    color: #ccc;
    .mvtime {
      font-size: 10px;
    }
    .mvcount {
      margin-left: 20px;
      font-size: 10px;
    }
  }
  .mvdesc {
    text-indent: 20px;
  }
}
.pinP{
  position: relative;
}
.pinlunbtn {
  position: absolute;
  left: -46px;
    top: 13px;
  border: #ccc solid 1px;
  height: 20px;
  width: 40px;
  border-radius: 10px;
  line-height: 20px;
  text-align: center;
  margin-top: 20px;
  
  cursor: pointer;
}
.pinlunbtn:hover {
  background-color: #ccc;
}
.hotcomment {
  font-weight: 600;
  font-size: 14px;
}
.pinglunUl {
  padding-inline-start: 0;
}
.punlunLi {
  font-size: 5px;
  // height: 80px;
  list-style: none;
  margin-bottom: 50px;
  // line-height: 80px;
  // display: flex;
  // justify-content: space-between;
  position: relative;
  img {
    border-radius: 50%;
    position: absolute;
    left: 28px;
    top: 21px;
  }
  .pinglunContent{
    width: 491px;
    margin-left: 73px;
  }
}
.toJingchai {
  text-align: center;
  height: 30px;
  line-height: 30px;
  .toJingchaiPinglun {
    border: #ccc solid 1px;
    display: inline-block;
    border-radius: 10px;
    width: 140px;
    height: 30px;
    margin-top: 16px;
  }
}
.zan {
  position: absolute;
  top: 50px;
  right: -46px;
  padding-right: 50px;
  #huifu {
    margin-left: 10px;
  }
}
.biaoti {
  color: red !important;
}
.userNickname {
  color: #50a5d9;
}
.content {
  margin-left: -61px;
}
.shijian {
  position: absolute;
  top: 20px;
  left: 75px;
  font-size: 10px;
}
.subitem {
  float: left;
  width: 400px;
  height: 100px;
  margin-bottom: 20px;
  position: relative;
  .avatar {
    border-radius: 50%;
    margin-right: 10px;
  }
  .subsName {
    position: absolute;
    top: 35px;
    left: 120px;
  }
}
.xiangguanTJ{
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}
.tuijianDiv{
  height: 100px;
  width: 300px;
  margin-bottom: 20px;
  img{
    width: 130px;
    height: 100px;
    border-radius: 5px;
    margin-right: 10px;
  }
  span{
    display: inline-block;
    width: 150px;
    height: 80px;
    .userName{
      font-size: 10px;
      color: #ccc;
    }
  }
}
</style>
