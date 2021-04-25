<template>
    <div>
        <div>
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
                    <i class="iconfont iconhuifu" id="huifu" @click="huifu(item.user.nickname)"></i>
                </span>       
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            //热评
        hotComments: []
        }
    },
    created(){
        this.getMusiclistPinlun();
    },
    methods: {
         // 获取歌单评论
    async getMusiclistPinlun(){
     const {data:res} = await this.$axios.get('http://localhost:3000/comment/playlist?id='+this.$route.query.id);
     res.hotComments.forEach(element => {
          const time = new Date(element.time);
         element.time = `${time.getFullYear()}年${time.getMonth()+1}月${time.getDate()}日  ${time.getHours()}:${time.getMinutes()}`;
     });
     this.hotComments = res.hotComments;
     console.log(this.hotComments)
    },
    // 点赞
    async dianzan(commentId,liked,index){
      let t = 1;
      this.hotComments[index].likedCount++;
      this.$refs.zan.style.color = 'red';
      const {data:res} = await this.$axios.get('http://localhost:3000/comment/like?id=2'+ this.$route.query.id+'&cid='+commentId+'&t='+t+'&type=2');
      console.log(res)
    },
    //回复
    huifu(nickname){
      this.content = '回复'+nickname+':';
    },
    }
}
</script>

<style lang="less" scoped>
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