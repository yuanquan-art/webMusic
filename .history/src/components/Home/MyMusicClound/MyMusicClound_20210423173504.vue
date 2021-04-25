<template>
  <div>
    <p>我的音乐云盘</p>
    <div class="block">
      <span class="demonstration">云盘容量</span>
      <el-slider v-model="value"></el-slider>
      <span>{{(yunpan.size/(1024*1024*10*10))}}G/{{parseInt(yunpan.maxSize/(1024*1024*10*10*10))}}G</span>
    </div>

     <input id="file" type="file" multiple />

  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 50,
      // 云盘
      yunpan: {},
      value2: 0
    };
  },
  created() {
    this.getCloudPan();
  },
  methods: {
    //获取云盘
    async getCloudPan() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/user/cloud"
      );
      console.log(res);
      this.yunpan = res;
      this.value = parseInt(
        (parseInt(res.size / 1024) / parseInt(res.maxSize / 1024)) * 10000
      );
      const yicun = this.yunpan.size/(1024*1024*10*10);
    },
    handleUp(){
   const p = document.querySelector('input[type="file"]');
    console.log(p.files);
    this.login(this.$store.state.loginForm);
    let currentIndx = 0
         const fileLength = p.files.length
          for (const item of p.files) {
            currentIndx += 1
            this.upload(item, currentIndx)
          }
    },
  async login(form) {
      const res = await this.$axios({
          method: 'post',
        url: 'http://localhost:3000/login/cellphone',
        withCredentials: true, //关键
        data:form
      })
      let cookieToken = res.data.cookie
    },
   upload(file, currentIndx) {
      var formData = new FormData()
      const fileUpdateTime = {}
      formData.append('songFile', file)
       this.$axios({
       method: 'post',
       url: `http://localhost:3000/cloud?time=${Date.now()}`,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      }).then(res => {
        console.log(`${file.name} 上传成功`)
        if (currentIndx >= fileLength) { console.log('上传完毕') }
      }).catch(async err => {
        console.log(err)
        console.log(fileUpdateTime)
        fileUpdateTime[file.name] ? fileUpdateTime[file.name] += 1 : fileUpdateTime[file.name] = 1
        if (fileUpdateTime[file.name] >= 4) {
          console.error(`丢，这首歌怎么都传不上：${file.name}`)
          return
        } else {
          ElMessage.success('上传成功！');
        }
        // await this.login()
        // this.upload(file, currentIndx)
      })
    }  
  }
};
</script>

<style lang="less" scoped>
.el-slider{
    display: inline-block;
    width: 200px;
}
</style>
