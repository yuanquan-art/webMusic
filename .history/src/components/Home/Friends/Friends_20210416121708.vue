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
         {{ (JSON.parse(item.json)).song.keys(name)}}
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
