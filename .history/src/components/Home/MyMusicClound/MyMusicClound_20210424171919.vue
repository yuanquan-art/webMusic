<template>
  <div>
    <p>我的音乐云盘</p>
    <!-- <div class="block">
      <span class="demonstration">云盘容量</span>
      <el-slider v-model="value"></el-slider>
      <span>{{(yunpan.size/(1024*1024*10*10))}}G/{{parseInt(yunpan.maxSize/(1024*1024*10*10*10))}}G</span>
    </div> -->

     <input id="file" type="file" multiple />

  </div>
</template>

<script>
import axios from 'axios'
export default {
  setup() {
    const phone = '15223683554' // 这里填手机号
    const password = 'yuanquan115337' // 这里填密码
    const fileUpdateTime = {}
    let fileLength = 0
    let cookieToken = ''
    if (!phone || !password) {
      const msg = '请设置你的手机号码和密码'
      alert(msg)
      throw new Error(msg)
    } 
    const login = async () =>{
      const res = await axios({
        method: 'post',
        url: `http://localhost:3000/login/cellphone?phone=${phone}&password=${encodeURIComponent(password)}`,
        withCredentials: true, //关键
      })
      
      cookieToken = res.data.cookie
        console.log(cookieToken)
    }
    login()
    //  const p = document.querySelector('input[type="file"]');
    //     console.log(p)
    const main =async ()=>{
       document
        .querySelector('input[type="file"]')
        .addEventListener('change', function (e) {
          console.log(this.files)
          let currentIndx = 0
          fileLength = this.files.length
          for (const item of this.files) {
            currentIndx += 1
            // upload(item, currentIndx)
          }
        })
    }
    // main()
    const upload =async (file, currentIndx) => {
        var formData = new FormData()
      formData.append('songFile', file)
     await axios({
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
          console.error(`${file.name} 失败 ${fileUpdateTime[file.name]} 次`)
        }
        await login()
        upload(file, currentIndx)
      })
    }

    return {
      login,
      main,
      upload
    }
  },
}
</script>





<style lang="less" scoped>
.el-slider{
    display: inline-block;
    width: 200px;
}
</style>
