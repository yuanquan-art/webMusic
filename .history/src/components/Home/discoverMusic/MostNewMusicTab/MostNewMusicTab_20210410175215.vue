<template>
  <div>
    <div id="box">
      <div class="tab">
        <ul>
          <!--
				1、绑定key的作用 提高Vue的性能
				2、 key 需要是唯一的标识 所以需要使用id， 也可以使用index ，
				index 也是唯一的
				3、 item 是 数组中对应的每一项
				4、 index 是 每一项的 索引
			-->
          <!-- v-on:click 缩写为 @click -->
          <button
            :key="item.id"
            v-for="(item, index) in info"
            @click="handle(index)"
            :class="currentIndex == index ? 'currentli' : ''"
          >
            {{ item.name }}
          </button>
        </ul>

        <!-- 绑定属性时，前面一定要加: -->
        <div class="xinMusic" :class="currentIndex == 0 ? 'currentdiv' : ''">
         1111111111
        </div>
        <div class="xinMusic" :class="currentIndex == 1 ? 'currentdiv' : ''">
          222222
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
              data(){
                return{
                    currentIndex: 0, //当前的索引
                info: [{
                    id: 1,
                    name: '新歌速递'
                }, {
                    id: 2,
                    name: '新碟上架'
                },],
                 activeName: 'sec'
                }
              },
            methods: {
                //点击li时将li的index传递过来
                handle: function(index) {
                    console.log(index);
                    this.currentIndex = index;
                }
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

.tab ul button {
  list-style: none;
  text-align: center;
  border: 1px solid #ccc;
  width: 100px;
}

.tab div {
  display: none;
}

.currentli {
  cursor: pointer;
  background-color: pink;
}

.tab div.currentdiv {
  display: block;
  height: 1000px;
}
.xinMusic {
  width: 1000px;
  transform: translateX(-400px);
}
</style>
