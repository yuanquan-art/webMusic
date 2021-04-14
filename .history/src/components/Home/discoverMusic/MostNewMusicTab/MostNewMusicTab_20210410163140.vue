<template>
    <div> 
        新碟上架
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods: {
      
    }
}
</script>

<style lang="less" scoped>
 * {
            margin: 0;
            padding: 0;
        }
        
        #box {
            width: 500px;
            /* 使box在页面上水平居中 */
            margin: 100px auto;
            box-sizing: border-box;
        }
        
        .tab ul {
            display: flex;
        }
        
        .tab ul li {
            list-style: none;
            text-align: center;
            border: 1px solid blue;
            /* 将ul等分为3个li */
            flex: 1;
        }
        
        .tab div {
            display: none;
        }
        
        img {
            border: 1px solid red;
            width: 500px;
            height: 400px;
            box-sizing: border-box;
            /* 去除图片底侧空白缝隙 */
            vertical-align: middle;
        }
        
        .currentli {
            cursor: pointer;
            background-color: pink;
        }
        
        .tab div.currentdiv {
            display: block;
        }
</style>