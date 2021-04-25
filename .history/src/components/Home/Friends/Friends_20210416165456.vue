<template>
  <div>
    <div>
      <div v-for="(item, index) in dongtaiMessage" :key="index">
        <p>
          <img :src="item.user.avatarUrl" alt="" width="50" height="50"/>
          <span>
            {{ item.user.nickname }}
          </span>
          <span>
            分享单曲
          </span>
        </p>
        <p>
          {{ JSON.parse(item.json).msg }}
        </p>
         {{ item.json}}
        <!-- <span>
          {{ JSON.parse(item.json).song.name }}
          {{ JSON.parse(item.json).song.artists.name }}
        </span> -->
        <!-- <img :src="JSON.parse(item.json).songs.artists.picUrl" alt="" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // 动态列表
            dongtaiMessage: [],
            parseMessage: []
        }
    },
    created(){
        this.getDongtaiMessage()
    },
    methods: {
      // 获取动态消息
      async getDongtaiMessage(){
          const {data:res} = await this.$axios.get('http://localhost:3000/event?pagesize=30');
          this.dongtaiMessage = res.event;
          for(const key in this.dongtaiMessage){
            this.parseMessage.push(this.dongtaiMessage[key]);
            this.parseMessage[key].json = JSON.parse(this.dongtaiMessage[key].json)
          }
          console.log(this.parseMessage);
      }
    }
}
</script>

<style lang="less" scoped>

</style>
