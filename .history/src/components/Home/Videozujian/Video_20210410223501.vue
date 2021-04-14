<template>
    <div>
         <el-tabs v-model="activeName">
    <el-tab-pane label="视频" name="first">视频</el-tab-pane>
    <el-tab-pane label="MV" name="second">MV</el-tab-pane>

  </el-tabs>
    </div>
</template>

<script>
export default {
    activeName: 'first'
}
</script>

<style lang="less" scoped>
  
</style>