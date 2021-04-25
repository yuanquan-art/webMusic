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
               <p>
                   {{ item.json.msg }}
               </p>
               <span>
                   {{ item.json.songs.name }}
                  {{ item.json.songs.artists.name }}

                   json: "{"msg":"#云村夜话# 假如你有500万，你会用来做什么？","soundeffectsInfo":null,"song":{"name":"如果有一天我变得很有钱","id":569214252,"position":12,"alias":[],"status":0,"fee":8,"copyrightId":2708402,"disc":"2","no":6,"artists":[{"name":"毛不易","id":12138269,"picId":0,"img1v1Id":0,"briefDesc":"","picUrl":"http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg","img1v1Url":"http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg","albumSize":0,"alias":[],"trans":"","musicSize":0}],"album":{"name":"平凡的一天","id":39483040,"type":"专辑","size":26,"picId":109951163350929740,"blurPicUrl":"http://p3.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg","companyId":0,"pic":109951163350929740,"picUrl":"http://p3.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg","publishTime":1530547200000,"description":"","tags":"","company":"哇唧唧哇×智慧大狗","briefDesc":"","artist":{"name":"","id":0,"picId":0,"img1v1Id":0,"briefDesc":"","picUrl":"http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg","img1v1Url":"http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg","albumSize":0,"alias":[],"trans":"","musicSize":0},"songs":[],"alias":[],"status":0,"copyrightId":2708402,"commentThreadId":"R_AL_3_39483040","artists":[{"name":"毛不易","id":12138269,"picId":0,"img1v1Id":0,"briefDesc":"","picUrl":"http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg","img1v1Url":"http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg","albumSize":0,"alias":[],"trans":"","musicSize":0}],"picId_str":"109951163350929740"},"starred":false,"popularity":100.0,"score":100,"starredNum":0,"duration":170880,"playedNum":0,"dayPlays":0,"hearTime":0,"ringtone":null,"crbt":null,"audition":null,"copyFrom":"","commentThreadId":"R_SO_4_569214252","rtUrl":null,"ftype":0,"rtUrls":[],"copyright":2,"mvid":0,"bMusic":{"name":null,"id":1491012960,"size":2735168,"extension":"mp3","sr":44100,"dfsId":0,"bitrate":128000,"playTime":170880,"volumeDelta":-19200.0},"mp3Url":null,"rtype":0,"rurl":null,"hMusic":{"name":null,"id":1491012958,"size":6837856,"extension":"mp3","sr":44100,"dfsId":0,"bitrate":320000,"playTime":170880,"volumeDelta":-23200.0},"mMusic":{"name":null,"id":1491012959,"size":4102731,"extension":"mp3","sr":44100,"dfsId":0,"bitrate":192000,"playTime":170880,"volumeDelta":-20600.0},"lMusic":{"name":null,"id":1491012960,"size":2735168,"extension":"mp3","sr":44100,"dfsId":0,"bitrate":128000,"playTime":170880,"volumeDelta":-19200.0},"img80x80":"http://p1.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=80x80x1"}}"

               </span>
               <img :src="item.json.songs.picUrl" alt="">
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