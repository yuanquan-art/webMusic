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
                <li :key='item.id' v-for='(item,index) in info' @click='handle(index)' :class='currentIndex==index?"currentli":"" '>{{item.name}}</li>

            </ul>

            <!-- 绑定属性时，前面一定要加: -->
            <div :key='item.id' v-for='(item,index) in info' :class='currentIndex==index?"currentdiv":"" '>{{ item.imgtitlt }}</div>

        </div>
    </div>

    </div>
</template>

<script>
export default {
    data: {
                currentIndex: 0, //当前的索引
                info: [{
                    id: 1,
                    name: 'vue',
                    //在鼠标在移动到元素上的文本提示
                    imgtitlt: '第一个前端框架'
                }, {
                    id: 2,
                    name: 'react',
                    imgtitlt: '第二个前端框架'
                }]
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
        
        
        .currentli {
            cursor: pointer;
            background-color: pink;
        }
        
        .tab div.currentdiv {
            display: block;
        }
</style>