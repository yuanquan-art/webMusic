import { createApp } from 'vue'
import 'element-plus/lib/theme-chalk/index.css';
import 
{
  ElButton,
  ElHeader,
  ElAside,
  ElMain,
  ElContainer,
  ElRow,
  ElCol,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElTabs,
  ElTabPane,
  ElCarousel,
  ElCarouselItem,
  ElCheckbox,
  ElDialog,
  ElForm,
  ElFormItem,
  ElOption,
  ElSelect,
  ElementPlus,
  ElPagination,
  ElAutocomplete,
  ElTable,
  ElTableColumn
} from 'element-plus';

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import './assets/css/iconfont.css'
import './assets/css/zplayer.min.css'
import './assets/js/zplayer.min.js'

import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css' //videoJs的样式
// import 'vue-video-player/src/custom-theme.css' //vue-video-player的样式
import 'videojs-flash'; //引入才能播放rtmp视屏
// import 'videojs-contrib-hls' //引入才能播放m3u8文件



const app = createApp(App)
app.component(ElButton.name, ElButton);
app.component(ElHeader.name, ElHeader);
app.component(ElAside.name, ElAside);
app.component(ElMain.name, ElMain);
app.component(ElContainer.name, ElContainer);
app.component(ElRow.name, ElRow);
app.component(ElCol.name, ElCol);
app.component(ElInput.name, ElInput);
app.component(ElMenuItem.name,ElMenuItem);
app.component(ElMenu.name,ElMenu);
app.component(ElCarouselItem.name,ElCarouselItem);
app.component(ElCarousel.name,ElCarousel);
app.component(ElTabs.name,ElTabs);
app.component(ElTabPane.name,ElTabPane);
app.component(ElDialog.name,ElDialog);
app.component(ElForm.name,ElForm);
app.component(ElFormItem.name,ElFormItem);
app.component(ElCheckbox.name,ElCheckbox);
app.component(ElOption.name,ElOption);
app.component(ElSelect.name,ElSelect);
app.component(ElPagination.name,ElPagination);
app.component(ElAutocomplete.name,ElAutocomplete);
app.component(ElTable.name,ElTable);
app.component(ElTableColumn.name,ElTableColumn);

import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:3000/'
app.config.globalProperties.$axios = axios;
axios.defaults.withCredentials = true;
app.use(store).use(router).use(ElementPlus).use(VideoPlayer).mount('#app')