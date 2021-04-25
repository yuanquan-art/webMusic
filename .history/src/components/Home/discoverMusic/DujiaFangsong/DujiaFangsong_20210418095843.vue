<template>
  <div>
    <div class="dujiaSendParent">
      <el-container>
        <el-aside width="600px">
          <p class="mvxq">
            &lt; MV详情
          </p>
          <div class="shipingView">播放视频</div>
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
                      <span class="mvtime">发布：{{ mvXQdata.publishTime }}</span>
                      <span class="mvcount">播放：{{ parseInt(mvXQdata.playCount/10000) }}万</span>
                    </p>
                  </template>
                  <div>
                   <p class="mvdesc"> {{ mvXQdata.desc }}</p>
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
           <el-input type="textarea"
           maxlength="140"
           resize="none"
           max="140"
        v-model="content"></el-input>
        <span @click="postPinlunContent" class="pinlunbtn">评论</span>
        <p class="hotcomment">精彩评论</p>
        <ul>
            <li class="punlunLi" v-for="(item,index) in hotComments" :key="index">
                <span>
                    <img :src="item.user.avatarUrl" alt="" width="40" height="40">
                    <span class="userNickname">{{ item.user.nickname }}:</span>
                <span class="content">{{item.content}}</span>
                <span class="shijian">{{item.time}}</span>
                </span>
                <span class="zan">
                    <i :class="(item.liked?'iconfont iconweibiaoti- biaoti':'iconfont iconweibiaoti-')" @click="dianzan(item.commentId,item.liked,index)"  ref="zan"></i>
                    <i >{{ item.likedCount }}</i>
                    <i class="iconfont iconhuifu" id="huifu" @click="huifu(item.user.nickname,item.commentId)"></i>
                </span>       
            </li>
        </ul>
      <!-- 最新评论 -->
      <p class="hotcomment">最新评论</p>
        <ul>
            <li class="punlunLi" v-for="(item,index) in comments" :key="index">
                <span>
                    <img :src="item.user.avatarUrl" alt="" width="40" height="40">
                    <span class="userNickname">{{ item.user.nickname }}:</span>
                <span class="content">{{item.content}}</span>
                <span class="shijian">{{item.time}}</span>
                </span>
                <span class="zan">
                    <i :class="(item.liked?'iconfont iconweibiaoti- biaoti':'iconfont iconweibiaoti-')" @click="dianzan(item.commentId,item.liked,index)"  ref="zan"></i>
                    <i >{{ item.likedCount }}</i>
                    <i class="iconfont iconhuifu" id="huifu" @click="huifu(item.user.nickname,item.commentId)"></i>
                </span>       
            </li>
        </ul>

        </div>

             1111111
            </el-main>
          </el-container>
        </el-aside>
        <el-main>相关推荐</el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // mv详情数据
      mvXQdata: {},
      mvXQdataArtistsName1: "",
      mvXQdataArtistsName2: "",
    };
  },
  created() {
    console.log(this.$route.query.id);
    this.getVideoXQ();
  },
  methods: {
    //获取mv详情
    async getVideoXQ() {
      console.log(this.$route.query.id);
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/mv/detail?mvid=" + this.$route.query.id
      );
      console.log(res);
      this.mvXQdata = res.data;
      this.mvXQdataArtistsName1 = this.mvXQdata.artists[0].name;
      this.mvXQdataArtistsName2 = this.mvXQdata.artists[1].name;
    },
    // 获取歌单详情
    async getMusicListXQ() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/playlist/detail/dynamic?id=" +
          this.$route.query.id
      );
      this.musicListXQ = res.playlist;
      //追加每一首个的like属性
      this.musicListXQ.tracks.forEach(element => {
          element.like = false;
      });
      this.musicTracks =this.musicListXQ.tracks;
      this.musicListXQCreator = res.playlist.creator;
      this.musicListXQTags = res.playlist.tags;
    },
    // 是否喜欢
    async love(row, column, cell, event){
        if(row.like==false){
            row.like = true;
             cell.childNodes[0].childNodes[2].style.color = 'red';
            //  const {data:res} = await this.$axios.get('http://localhost:3000/like?id='+row.id+'&like'+row.like+'&timestamp='+new Date());
            //  console.log(res)
        }else{
            row.like = false;
             cell.childNodes[0].childNodes[2].style.color = '';
            //   const {data:res} = await this.$axios.get('http://localhost:3000/like?id='+row.id+'&like'+row.like+'&timestamp='+new Date());
            //  console.log(res)
        }
       
        //console.log(cell.childNodes[0].childNodes[2])
    },
    // 获取歌单评论
    async getMusiclistPinlun(){
     const {data:res} = await this.$axios.get('http://localhost:3000/comment/playlist?id='+this.$route.query.id);
     for(let i =0;i<8;i++){
         this.hotComments.push(res.hotComments[i]);
     }
     this.hotComments.forEach(element => {
          const time = new Date(element.time);
         element.time = `${time.getFullYear()}年${time.getMonth()+1}月${time.getDate()}日  ${time.getHours()}:${time.getMinutes()}`;
     });
     this.comments = res.comments;
    },
    // 发送评论
    async postPinlunContent(){
        if(this.commentid){
             const {data:res} = await this.$axios.get('http://localhost:3000/comment?t=1&type=2&id='+this.commentid+'&content='+this.content.toString().split(':')[1].toString());
             console.log(res)
            ElMessage.success('回复成功！');
        }else{
          const {data:res} = await this.$axios.get('http://localhost:3000/comment?t=1&type=2&id='+this.$route.query.id+'&content='+this.content);
          console.log(res)
            ElMessage.success('评论成功！');
        }
      
    },
    // 双击播放音乐
    async dbBofang(row){
        const {data:res} = await this.$axios.get('http://localhost:3000/song/url?id='+row.id);
        console.log(res.data[0].url)
        console.log(row)
      this.musicObjParams.title = row.name;
      this.musicObjParams.author = row.ar[0].name;
      this.musicObjParams.pic = row.al.picUrl;
      this.musicObjParams.url = res.data[0].url;
      console.log(this.musicObjParams)
      this.$store.commit('addMusic',this.musicObjParams);
    },
    // 点赞
    async dianzan(commentId,liked,index){
      let t = 1;
      this.hotComments[index].likedCount++;
      this.$refs.zan.style.color = 'red';
      const {data:res} = await this.$axios.get('http://localhost:3000/comment/like?id=2'+ this.$route.query.id+'&cid='+commentId+'&t='+t+'&type=2');
    },
    //回复
    huifu(nickname,id){
      this.content = '回复'+nickname+':';
      this.commentid = id;
    },
    // 歌单收藏者
    async getMusicListHidden(){
        const {data:res} = await this.$axios.get('http://localhost:3000/playlist/subscribers?id='+this.$route.query.id+'&limit=30');
        this.subscribers = res.subscribers;
    }
  },
};
</script>

<style lang="less" scoped>
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
  .mvdesc{
    text-indent: 20px;
  }
}
</style>
