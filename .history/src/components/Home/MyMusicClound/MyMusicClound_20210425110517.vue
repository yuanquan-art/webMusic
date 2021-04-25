<template>
  <div>
    <p>我的音乐云盘</p>
    <div class="block">
      <span class="demonstration">云盘容量</span>
      <el-slider v-model="value"></el-slider>
      <span>{{parseOne}}G/{{ maxSize}}G</span>
    </div>

    <input id="file" type="file" multiple />

      <!-- 音乐列表 -->
    <el-table
    :data="data"
    @cell-click="love"
    @row-dblclick="dbBofang"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="songName"
      label="音乐标题"
      sortable
      width="300"
      >
    </el-table-column>
    <el-table-column
      prop="artist"
      label="歌手"
      sortable
      width="300"
>
    </el-table-column>
       <el-table-column
      prop="album"
      label="专辑"
      sortable
>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
export default {
  setup() {
    const phone = "15223683554"; // 这里填手机号
    const password = "yuanquan115337"; // 这里填密码
    const fileUpdateTime = {};
    let fileLength = 0;
    let cookieToken = "";
    if (!phone || !password) {
      const msg = "请设置你的手机号码和密码";
      alert(msg);
      throw new Error(msg);
    }
    const login = async () => {
      const res = await axios({
        method: "post",
        url: `http://localhost:3000/login/cellphone?phone=${phone}&password=${encodeURIComponent(
          password
        )}`,
        withCredentials: true, //关键
      });

      cookieToken = res.data.cookie;
      // console.log(cookieToken)
    };
    login();
    onMounted(() => {
      const main = async () => {
        const p = document.querySelector('input[type="file"]');
        console.log(p);
        document
          .querySelector('input[type="file"]')
          .addEventListener("change", function(e) {
            console.log(this.files);
            let currentIndx = 0;
            fileLength = this.files.length;
            for (const item of this.files) {
              currentIndx += 1;
              upload(item, currentIndx);
            }
          });
      };
      // main();

      const upload = (file, currentIndx) => {
        console.log(currentIndx);
        var formData = new FormData();
        formData.append("songFile", file);
        axios({
          method: "post",
          url: `http://localhost:3000/cloud?time=${Date.now()}`,
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        })
          .then((res) => {
            console.log(`${file.name} 上传成功`);
            if (currentIndx >= fileLength) {
              console.log("上传完毕");
            }
          })
          .catch(async (err) => {
            console.log(err);
            console.log(fileUpdateTime);
            fileUpdateTime[file.name]
              ? (fileUpdateTime[file.name] += 1)
              : (fileUpdateTime[file.name] = 1);
            if (fileUpdateTime[file.name] >= 4) {
              console.error(`丢，这首歌怎么都传不上：${file.name}`);
              return;
            } else {
              console.error(
                `${file.name} 失败 ${fileUpdateTime[file.name]} 次`
              );
            }
            await login();
            upload(file, currentIndx);
          });
      };
    });
    // 获取云盘
    const yunpan = reactive({
    });
    let value = ref(0);
    const parseOne = ref(0);
    const maxSize = ref(0);
    const data = ref([])
    const getCloudPan = async () => {
      const { data: res } = await axios.get("http://localhost:3000/user/cloud");
      console.log(res);
      yunpan.value = res;
      value.value = parseInt(
        (res.size / 1024 / parseInt(res.maxSize / 1024)) * 10000
      );
     parseOne.value = yunpan.value.size/(1024*1024*10*10);
    parseOne.value = parseOne.value.toString();
    const index = parseOne.value.indexOf('.');
    parseOne.value = index > 0 ? parseOne.value.slice(0,index+2) : parseOne.value;
    maxSize.value = parseInt(yunpan.value.maxSize/(1024*1024*10*10*10));
    data.value = res.data;
    data.value.forEach(element => {
      element.
    });
    };
    getCloudPan();

    return {
      login,
      getCloudPan,
      yunpan,
      value,
      parseOne,
      maxSize,
      data
    };
  },
};
</script>

<style lang="less" scoped>
.el-slider {
  display: inline-block;
  width: 200px;
}
</style>
