import { createApp } from 'vue'
import ElementPlus from 'element-plus';
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
  ElCarouselItem
} from 'element-plus';

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import './assets/css/iconfont.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/'

const app = createApp(App)
app.config.globalProperties.$http=axios
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
app.use(store).use(router).use(ElementPlus).mount('#app')
