<template>
  <div class="home">
  <el-container>
    <!-- 顶部栏 -->
    <el-header>
        <el-row>
          <el-col :span="4">
            <img class="logo" src="../../assets/images/Music-logo.png" alt="" width="100" height="75" />
          </el-col>
          <el-col :span="8">
            <span class="el-icon-arrow-left zuojiantou"></span>
            <span class="el-icon-arrow-right youjiantou"></span>
            <!-- 搜索框 -->
            <el-input placeholder="搜索" prefix-icon="el-icon-search">
            </el-input>
            <span class="maike">
              <span class="iconfont iconziyuan"></span>
            </span>
          </el-col>
          <!-- 顶栏右部 -->
          <el-col :span="9" class="top-right">
            <el-row class="top-zujian">
              <el-col :span="1">
                <i class="iconfont iconiconset01100" v-if="!loginResponse.value"></i>
                <i v-else class="touxiang">
                  <img :src="loginResponse.value.profile.avatarUrl" alt="" width="35" height="35">
                </i>
              </el-col>
              <el-col class="user-unlogin" :span="2">
                <span class="unlogin" >
                  
                  <i @click="showLoginDialogVisible" v-if="!loginResponse.value">未登录</i>
                  <i v-else class="nickname">{{ loginResponse.value.profile.nickname }}</i>
                  <i v-if="!loginResponse.value" class="iconfont iconxiajiantou"></i>
                </span>
              </el-col>
              <i class="kaivip">开通VIP</i>
              <el-col :span="5" class="tubiao">
                <i class="iconfont iconicon-"></i>
                <i class="iconfont iconzhuti"></i>
                <i class="iconfont iconyouxiang"></i>
                <i class="iconfont iconzuixiaohua"></i>
                <i class="iconfont iconjianhao"></i>
                <i class="iconfont iconfangkuang"></i>
                <i class="iconfont iconcancel-1-copy"></i>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
    </el-header>
    <el-container>
      <!-- 左侧导航栏 -->
      <el-aside width="245px">
         <!-- 侧边栏 -->
          <div class="navMenu">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              active-text-color="#000"
              router
            >
              <el-menu-item index="/discoverMusic" class="active">
                <span slot="title">发现音乐</span>
              </el-menu-item>
              <el-menu-item index="/video">
                <span slot="title">视频</span>
              </el-menu-item>
              <el-menu-item index="3">
                <span slot="title">朋友</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">直播</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">私人FM</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">我的音乐</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="iconfont iconyinyue"></i>
                <span slot="title">本地音乐</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="iconfont iconxiazai"></i>
                <span slot="title">下载管理</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="iconfont iconB"></i>
                <span slot="title">我的音乐云盘</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="iconfont iconshoucang1"></i>
                <span slot="title">我的收藏</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">创建的歌单</span>
                <span>+</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="iconfont iconwodeshoucang"></i>
                <span slot="title">我喜欢的音乐</span>
                <i class="iconfont iconhuaban"></i>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="iconfont iconyinleliebiao-"></i>
                <span slot="title">袁君</span>
              </el-menu-item>
            </el-menu>
          </div>
      </el-aside>
      <!-- 主体部分 -->
      <el-main>
        <!-- 路由占位 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>




  <!-- 点击未登录弹出登录对话框 -->
  <el-dialog
  v-model="loginDialogVisible"
  width="25%">
  <!-- 对话主体 -->
  <p3 class="denglu">登录</p3>
  <!-- 登录表单 -->
  <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="80px">
  <el-form-item label="电话" prop='phone'>
    <el-input v-model="loginForm.phone"></el-input>
  </el-form-item>
   <el-form-item label="密码" prop=password>
    <el-input type="password" v-model="loginForm.password"></el-input>
  </el-form-item>
  </el-form>
  <span class="signUp">
    <a href="#" @click="showSignUpDialogVisible">免费注册</a>
  </span>
  <span>
  <el-checkbox v-model="checked" class="agreePro">同意
    <a href="https://st.music.163.com/official-terms/service">《服务条款》</a>
    <a href="https://st.music.163.com/official-terms/privacy">《隐私政策》</a>
    <a href="https://st.music.163.com/official-terms/children">《儿童隐私政策》</a>
    </el-checkbox>
  </span>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="loginDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitLoginForm">登录</el-button>
    </span>
  </template>
</el-dialog>

<!-- 点击免费注册弹出注册对话框 -->
   <el-dialog
  v-model="signUpDialogVisible"
  width="25%"
>
  <!-- 对话主体 -->
  
  <!-- 登录表单 -->
  <el-form ref="signUpFormRef" :model="signUpForm" :rules="signUpFormRules" label-width="80px">
    <el-form-item label="昵称" prop="nickname">
      <el-input class="nickNameInput" v-model="signUpForm.nickname"></el-input>
  </el-form-item>
   <el-form-item label="密码" prop=password>
    <el-input type="password" v-model="signUpForm.password"></el-input>
  </el-form-item>
  <el-form-item class="zhucePhone" label="电话" prop='phone'>
    <el-select v-model="value" :placeholder="countries[0].zh+'+'+countries[0].code">
    <el-option
      v-for="item in countries"
      :key="item.en"
      :label="item.zh+'+'+item.code"
      :value="item.en">
    </el-option>
   </el-select>
    <el-input v-model="signUpForm.phone" ></el-input>
  </el-form-item>
  <el-form-item label="验证码" prop="code">
    <el-input v-model="signUpForm.code"></el-input>
    <el-button type="primary" @click="getSignupCode">发送验证码</el-button>
  </el-form-item>
  <el-button type="primary" @click="zhuceMusicId">注册</el-button>
  </el-form>
</el-dialog>


  </div>  
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   // name: 'Home',
//   // components: {
//   //   HelloWorld
//   // }
// }
import {  onBeforeMount, ref ,reactive} from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus';
export default {
  setup(props,context){
     const loginDialogVisible = ref(false);
     const signUpDialogVisible = ref(false);
     // 控制登录对话框的显示
     const showLoginDialogVisible = () => {
      loginDialogVisible.value = ! loginDialogVisible.value
     };
     //所有国家列表追加在一起
     const countries = reactive([]);
     //注册时每个国家的编码
     const value = ref('');
     //控制注册对话框的显示
     const showSignUpDialogVisible =async () => {
        if(checked.value !== true){
          ElMessage.error('请同意用户协议');
          return;
        }
        loginDialogVisible.value = false;
        //获取国家编码
        const {data:res1} = await axios.get("/countries/code/list");
        //所有国家列表追加在一起
        const {data: res} = res1;
        console.log(res)
        for(let i = 0;i <res.length;i++){
          for(let j=0;j<res[i].countryList.length;j++){
            countries.push(res[i].countryList[j]);
          }
        }
        console.log(countries[1])
        signUpDialogVisible.value = !signUpDialogVisible.value;
     }
     // 登录表单提交信息
     // 登录表单提交信息
     const loginForm = reactive(
           {
             phone:'',
             password:''
          }
     );
     //注册表单
     const signUpForm = reactive({
        phone: '',
        password: '',
        nickname: '',
        code: ''
     });
     //注册表单验证规则
      const signUpFormRules = 
        {
          phone: [
          { required: true, message: "请输入电话号码", trigger: "blur" }
        ],
          password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ],
         nickname: [
          { required: true, message: "昵称不能为空", trigger: "blur" }
        ],
         code: [
          { required: true, message: "验证码不能为空", trigger: "blur" }
        ]
        };
     // 获取验证码
      const getSignupCode =async () => {
        const {data:checkPhone} = await axios.get('/cellphone/existence/check?phone='+signUpForm.phone);
        if(checkPhone.exist == 1){
          ElMessage.error('此手机号码已注册，请登录！');
        }
        const {data:phoneCode} = await axios.get('/captcha/sent?phone='+signUpForm.phone);
        console.log(phoneCode)
      }   
     //注册
     const zhuceMusicId =async () => {
       //验证手机号和验证码是否正确
        
        // const {data:zhuceRes} = await axios.post('/register/cellphone?phone='+signUpForm.phone+'&password='+signUpForm.password+'&captcha='+signUpForm.code+'&nickname='+signUpForm.nickname);
        // console.log(zhuceRes)
     }
     // 登录表单验证规则
     const loginFormRules = 
        {
          phone: [
          { required: true, message: "请输入电话号码", trigger: "blur" }
        ],
          password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
        };
     const loginResponse = reactive({});
     //复选框状态
     const checked = ref(true);
     //函数的声明
     const submitLoginForm = async () => {
        if(checked.value !== true){
          ElMessage.error('请同意用户协议');
          return;
        }
        const {data: res} = await axios.post("/login/cellphone",loginForm)
        console.log(  res )
        if(res.code=='200'){
          loginResponse.value = res;
          loginDialogVisible.value = false;
          ElMessage.success('登录成功');
        }
     }   
     return {
       //登录
       loginDialogVisible,
       showLoginDialogVisible,
       loginForm,
       loginFormRules,
       submitLoginForm,
       loginResponse,
       //复选状态
       checked,
       //注册
       signUpDialogVisible,
       showSignUpDialogVisible,
       signUpForm,
       signUpFormRules,
       countries,
       value,
       getSignupCode,
       zhuceMusicId
     }
  }
}


</script>

<style lang="less" scoped>
// 头部样式
.el-header {
  width: 100%;
  height: 75px !important;
   background-color: #41E6EC;
  position: relative;
  .logo{
    padding-left: 100px;
  }
}
.zuojiantou {
  margin-top: 25px;
  margin-left: 35px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #84acf5;
  color: #ed6565;
  line-height: 30px;
  text-align: center;
}
.youjiantou {
  margin-top: 25px;
  margin-left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #84acf5;
  color: #ed6565;
  line-height: 30px;
  text-align: center;
}
.el-input {
  width: 200px;
  height: 40px;
  margin-left: 30px;
  border-radius: 5px;
}
.search {
  width: 17px;
  height: 20px;
  color: #f9d8d8;
  margin-left: 10px;
  line-height: 20px;
}
.iconfont.iconziyuan {
  margin-top: 27px;
  margin-left: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #84acf5;
  color: #f2b9b9;
  line-height: 40px;
  text-align: center;
}
.top-right {
  position: absolute;
  top: 0;
  right: 0;
}
.top-zujian {
  line-height: 75px;
}
.iconfont.iconiconset01100 {
  font-size: 35px;
  border-radius: 50%;
  background-color: #e0e0e0;
  color: #f2f1f1;
}
.touxiang{
  img{
    border-radius: 50%;
    overflow: hidden;
    margin-top: 18px;
  }
}
.unlogin {
  display: inline-block;
  font-size: 15px;
  width: 100px;
  height: 35px;
  color: #fbd9d9;
  margin-left: 40px;
  .nickname{
    display: block;
    width: 100px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
 }
}
.iconfont.iconxiajiantou {
  margin-left: 10px;
}
.user-unlogin {
  margin-left: 10px;
}
.tubiao {
  margin-left: 0px;
  i {
  background-color: #41E6EC;
  color: #f7b3b3;
  margin-left: 12px;
  }  
}
.kaivip {
  margin-left: 91px;
  color: #f7b3b3;
}
.navMenu{
    margin: 0;
    padding: 0;
    width: 245px;
    li{
      margin: -10px;
    }
}
.iconfont.iconyinyue
{
  font-size: 15px;
  margin-right: 20px;
}
.iconfont.iconxiazai{
  font-size: 15px;
  margin-right: 20px;
}
.iconfont.iconB{
  font-size: 15px;
  margin-right: 20px;
}
.iconfont.iconshoucang1{
  font-size: 15px;
  margin-right: 20px;
}
.iconfont.iconwodeshoucang{
  font-size: 15px;
  margin-right: 20px;
}
.iconfont.iconyinleliebiao-{
  font-size: 18px;
  margin-right: 20px;
}
.active{
    font-weight: 700;
    background-color: #f6f6f7;
}
// 登录对话框
.denglu{
  margin-left: 140px;
  font-weight: 800;
  font-size: 35px;
  color: #41E6EC;
}
.signUp{
  margin-left: 280px;
  a{
    text-decoration: none;
    color: #2209b3;
  }
}
.agreePro{
  margin-top: 20px;
  margin-left: 20px;
  a{
    text-decoration: none;
    color: #0944b3;
  }
}
//注册
.zhuce{
  margin-left: 140px;
  font-weight: 800;
  font-size: 35px;
  color: #41E6EC;
}
.el-input__inner{
  width: 131%;
}
.zhucePhone{
  .el-input{
    width: 120px !important;
  }
}

// 主体部分
.el-main{
  width: 1270px;
  height: 800px;
  overflow: scroll;
}
</style>