<template>
    <div>
        <div>
              <p class="hotcomment">精彩评论</p>
        <ul>
            <li class="punlunLi" v-for="(item,index) in hotComments" :key="index">
                <span>
                    <img :src="item.user.avatarUrl" alt="" width="40" height="40">
                    <span>{{ item.user.nickname }}:</span>
                <span class="content">{{item.content}}</span>
                <span>{{item.time}}</span>
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
    data(){},
    created(){},
    methods: {
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
     console.log(this.hotComments)
    },
    }
}
</script>

<style lang="less" scoped>

</style>