<template>
    <div>朋友
        <div>
            <div v-for="(item,index) in dongtaiMessage" :key="index">
               <p>
                   <img :src="item.user.avatarUrl" alt="">
                   <span>
                       {{ item.user.nickname }}
                   </span>
                   <span>
                       分享单曲
                   </span>
               </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 动态列表
            dongtaiMessage: []
        }
    },
    created(){
        this.getDongtaiMessage()
    },
    methods: {
      // 获取动态消息
      async getDongtaiMessage(){
          const {data:res} = await this.$axios.get('http://localhost:3000/event?pagesize=30');
          console.log(res)
          this.dongtaiMessage = res.event;
      }
    }
}
</script>

<style lang="less" scoped>

</style>