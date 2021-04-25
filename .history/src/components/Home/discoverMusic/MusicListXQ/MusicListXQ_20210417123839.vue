<template>
  <div>
    <el-container>
      <!-- 头部 -->
      <el-header>
        <el-container>
          <el-aside width="200px">
            <img
              :src="musicListXQ.coverImgUrl"
              alt=""
              width="200"
              height="200"
              class="musicImg"
            />
          </el-aside>
          <!-- 标题部分 -->
          <el-main class="biaotiMessage">
            <p>
              <span class="gedanspan">歌单</span>
              <span class="musicname">{{ musicListXQ.name }}</span>
            </p>
            <p>
              <img
                :src="musicListXQCreator.avatarUrl"
                alt=""
                width="25"
                height="25"
                class="avatarUrl"
              />
              <span class="nickname">{{ musicListXQCreator.nickname }}</span>
              <span class="time">{{ time }}创建</span>
            </p>
            <p>
              <span class="quanbubofang">全部播放</span>
              <span class="quanbubofang"
                >收藏({{
                  parseInt(musicListXQ.subscribedCount / 10000)
                }})万</span
              >
            </p>
            <p class="nickname">标签：{{ tags }}</p>
            <p class="nickname">
              歌曲:{{ musicListXQ.trackCount }} 播放：
              {{ parseInt(musicListXQ.playCount / 10000) }}万
            </p>
            <p class="jianjie">简介： {{ musicListXQ.description }}</p>
          </el-main>
        </el-container>
      </el-header>
      <!-- 主体 -->
      <el-main>
           <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="歌曲列表" name="first">
        <!-- 音乐列表 -->
    <el-table
    :data="musicTracks"
    @cell-click="love"
    @row-dblclick="dbBofang"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="like"
      width="80">
       <i class="iconfont iconwodeshoucang"></i>
    </el-table-column>
    <el-table-column
      prop="name"
      label="音乐标题"
      sortable
      width="300"
      >
    </el-table-column>
    <el-table-column
      prop="ar[0].name"
      label="歌手"
      sortable
      width="300"
>
    </el-table-column>
       <el-table-column
      prop="al.name"
      label="专辑"
      sortable
>
    </el-table-column>
  </el-table>

    </el-tab-pane>
    <!-- 歌曲评论 -->
    <el-tab-pane label="歌曲评论" name="second">
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
        <p class="toJingchai">
            <span class="toJingchaiPinglun" @click="toHotCommentsPage">更多精彩评论></span>
      </p>
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

        
         <br>
         <br>
          <br>
           <br>
            <br>
             <br>

        </div>
    </el-tab-pane>
    <el-tab-pane label="收藏者" name="third">
        <div>
            <div v-for="(item,index) in parseSubscribers" :key="index">
                <!-- <img :src="parseSubscribers.avatarUrl" alt=""> -->
                <span>{{ parseSubscribers['nickname'] }}</span>
            </div>
        </div>
    </el-tab-pane>
  </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';
export default {
  data() {
    return {
      //tabs默认激活
      activeName: 'first',
      // 歌单详情信息
      musicListXQ: {},
      musicListXQCreator: {},
      musicListXQTags: {},
      musicTracks: [],
      // 评论内容
      content: '',
      // 热评
      hotComments: [],
      //传入vuex歌曲对象参数
      musicObjParams: {
        title: '',
        author: '',
        url: '',
        pic: '',
        lrc: ''
      },
      //评论
      comments: [],
      commentid: null,
      // 收藏者列表
      parseSubscribers:[]
    };
  },
  created() {
    this.getMusicListXQ();
    this.getMusiclistPinlun();
    this.getMusicListHidden();
  },
  computed: {
    tags: function() {
      return this.musicListXQTags.toString();
    },
    time: function() {
      return new Date(parseInt(this.musicListXQ.createTime))
        .toLocaleString()
        .replace(/:\d{1,2}$/, " ");
    }
  },
  methods: {
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
    //去所有精彩评论
    toHotCommentsPage(){
       this.$router.push({path:'/hotcomments',query: {id:this.$route.query.id}});
    },
    // 歌单收藏者
    async getMusicListHidden(){
        const {data:res} = await this.$axios.get('http://localhost:3000/playlist/subscribers?id='+this.$route.query.id+'&limit=30');
  
        this.subscribers = res.subscribers;
    
        for(const key in this.subscribers){
            //  this.parseSubscribers[key].avatarUrl = this.subscribers[key].avatarUrl;
            //  this.parseSubscribers[key].nickname = this.subscribers[key].nickname;
            console.log(this.subscribers[key].avatarUrl)
        }
        console.log(this.parseSubscribers)
    }
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: rgb(19, 224, 243);
  height: 200px !important;
  .musicImg {
    border-radius: 5px;
  }
  .gedanspan {
    border: red solid 1px;
    border-radius: 2px;
    color: red;
  }
  .avatarUrl {
    border-radius: 50%;
  }
  .nickname {
    font-size: 8px;
    margin-left: 5px;
  }
  .time {
    color: #ccc;
    margin-left: 5px;
    font-size: 8px;
  }
  .quanbubofang {
    display: inline-block;
    margin-right: 20px;
    background-color: red;
    line-height: 30px;
    font-size: 15px;
    width: 100px;
    height: 30px;
    border-radius: 110px;
    text-align: center;
  }
  .biaotiMessage {
    margin: 0 !important;
    padding: 0 0 0 20px !important;
    p {
      margin: 10px;
      line-height: 16px;
    }
    .musicname {
      font-size: 20px;
      font-weight: 700;
    }
    .jianjie {
      font-size: 8px;
      margin-left: 9px;
      display: block;
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
.pinlunbtn{
    display: inline-block;
    border: #ccc solid 1px;
    height: 20px;
    width: 40px;
    border-radius: 10px;
    line-height: 20px;
    text-align: center;
    margin-top: 20px;
    margin-left: 1300px;
    cursor: pointer;
}
.pinlunbtn:hover{
    background-color: #ccc;
}
.hotcomment{
    font-weight: 600;
    font-size: 14px;
}
.punlunLi{
    height: 80px;
    background-color: rgb(32, 248, 248);
    list-style: none;
    margin-bottom: 5px;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    position: relative;
    img{
        border-radius: 50%;
        position: absolute;
        left: 28px;
        top: 21px;
    }
}
.toJingchai{
    text-align: center;
    height: 30px;
    line-height: 30px;
    .toJingchaiPinglun{
     border:#ccc solid 1px;
         display: inline-block;
    border-radius: 10px;
    width: 140px;
    height: 30px;
    margin-top: 16px;
  }
}
.zan{
    padding-right: 50px;
   #huifu{
     margin-left: 10px;
   }
}
 .biaoti{
     color: red !important;
   }
.userNickname{
    color: #50A5D9;
    margin: 78px;
}
.content{
    margin-left: -61px;
}
.shijian{
        position: absolute;
    top: 20px;
    left: 75px;
    font-size: 10px;
}
</style>
