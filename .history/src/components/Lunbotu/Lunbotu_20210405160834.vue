<template>
    <div>
 <div class="box">
	<div class="list">
		<ul>
			<li class="p7"><a href="#"><img src="img/1.png" alt=""  width="540" height="200"/></a></li>
			<li class="p6"><a href="#"><img src="img/2.png" alt=""  width="540" height="200"/></a></li>
			<li class="p5"><a href="#"><img src="img/3.png" alt=""  width="540" height="200"/></a></li>
			<li class="p4"><a href="#"><img src="img/44.jpg" alt="" width="540" height="200"/></a></li>
			<li class="p3"><a href="#"><img src="img/55.jpg" alt="" width="540" height="200"/></a></li>
			<li class="p2"><a href="#"><img src="img/66.jpg" alt="" width="540" height="200"/></a></li>
			<li class="p1"><a href="#"><img src="img/77.jpg" alt="" width="540" height="200"/></a></li>
		</ul>
		
	</div>
	
	<a href="javascript:;" class="prev btn"><</a>
	<a href="javascript:;" class="next btn">></a>

	<div class="buttons">
		<a href="javascript:;"><span class="blue"></span></a>
		<a href="javascript:;"><span></span></a>
		<a href="javascript:;"><span></span></a>
		<a href="javascript:;"><span></span></a>
		<a href="javascript:;"><span></span></a>
		<a href="javascript:;"><span></span></a>
		<a href="javascript:;"><span></span></a>
	</div>
</div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>



<style lang="less" scoped>
   *{
	margin: 0;
	padding: 0;
}


.box{
	width: 1300px;
	height: 200px;
	position: relative;
}

.list{
	width: 1200px;
	height: 300px;
	overflow: hidden;
	position: absolute;
	left: 50%;
	margin-left: -600px;
}

.btn{
	position: absolute;
	top: 50%;
	width: 60px;
	height: 100px;
	line-height: 100px;
	font-size: 30px;
	color: white;
	text-decoration: none;
	text-align: center;
	background: rgba(0,255,0,.5);
	cursor: pointer;
}
.next{
	right: 0;
}

li{
	position: absolute;
	top: 0;
	left: 0;
	list-style: none;
	opacity: 0;
	transition: all 0.3s ease-out;
}
img{
	width: 751px;
	height: 300px;
	border:none;
	float: left;
}
.p1{
	transform:translate3d(-224px,0,0) scale(0.81);
}
.p2{
	transform:translate3d(0px,0,0) scale(0.81);
	transform-origin:0 50%;
	opacity: 0.8;
	z-index: 2;
}
.p3{
	transform:translate3d(224px,0,0) scale(1);
	z-index: 3;
	opacity: 1;
}
.p4{
	transform:translate3d(449px,0,0) scale(0.81);
	transform-origin:100% 50%;
	opacity: 0.8;
	z-index: 2;
}
.p5{
	transform:translate3d(672px,0,0) scale(0.81);
}
.p6{
	transform:translate3d(896px,0,0) scale(0.81);
}
.p7{
	transform:translate3d(1120px,0,0) scale(0.81);
}

.buttons{
	position: absolute;
	width: 1200px;
	height: 30px;
	bottom: 0;
	left: 50%;
	margin-left: -600px;
	text-align: center;
	padding-top: 10px;
}
.buttons a{
	display: inline-block;
	width: 35px;
	height: 5px;
	padding-top: 4px;
	cursor: pointer;
}
span{
	display: block;
	width: 35px;
	height: 1px;
	background: red;
}
.blue{
	background: blue;
}
</style>