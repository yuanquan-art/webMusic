<template>
  <div>
    <p>我的音乐云盘</p>
    <div class="block">
      <span class="demonstration">云盘容量</span>
      <el-slider v-model="value"></el-slider>
      <span>{{(yunpan.size/(1024*1024*10*10))}}G/{{parseInt(yunpan.maxSize/(1024*1024*10*10*10))}}G</span>
    </div>

<el-upload
     ref="replaceUploader"
     :file-list="replaceList"
     v-model="newChapter.title"
     class="avatar-uploader"
     action="/file/upload"
     :limit="1"
     :show-file-list="true"
     :on-success="handleReplaceAvatarSuccess"
     :on-exceed="handleExceed"
     :beforeUpload="beforeAvatarUpload">
      <el-button size="small" type="primary">点击上传</el-button>
</el-upload>

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
    
   /**
     *上传文件限制--只能上传mp3格式的文件
     */
      beforeAvatarUpload(file) {
         var testmsg = file.name.substring(file.name.lastIndexOf('.')+1)
         const extension = testmsg === 'mp3'
         if(!extension){
           this.$message({
             message:"上传文件只能是mp3格式！",
             type:'error'
           })
         }
         return extension;
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
     handleReplaceAvatarSuccess(){}
  }
};
</script>

<style lang="less" scoped>
.el-slider{
    display: inline-block;
    width: 200px;
}
</style>
