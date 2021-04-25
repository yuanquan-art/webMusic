<template>
  <div>
    <div>
      <div v-for="(item, index) in dongtaiMessage" :key="index" class="dongtaiP">
        <p>
          <img :src="item.user.avatarUrl" alt="" />
          <span>
            {{ item.user.nickname }}
          </span>
          <span>
            发布动态
          </span>
        </p>
        <p>
          {{  item.json['msg'] }}
        </p>
        <span>
        
          <!-- {{ JSON.parse(item.json).song.artists.name }} -->
        </span>
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
          res.event.forEach(element => {
            element.json = JSON.parse(element.json);
            // console.log(element.json['song']['name'])
          });
          this.dongtaiMessage = res.event;
          console.log(this.dongtaiMessage)
          
          // for(const key in this.dongtaiMessage){
          //   this.parseMessage.push(this.dongtaiMessage[key]);
          //   const temp = JSON.parse(this.parseMessage[key].json);
          //   this.parseMessage[key].songs = temp; 
          // }
          // console.log(this.parseMessage[14].songs.name)
          // console.log(this.parseMessage[14].songs.artists[0].name);

      }
    }
}
</script>

<style lang="less" scoped>
.dongtaiP{
  img{
   width: 50px;
   height: 50px;
   border-radius: 50%;
  }
}
</style>
