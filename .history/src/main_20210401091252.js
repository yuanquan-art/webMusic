import { createApp } from 'vue'
import ElementPlus, { ElDialog, ElForm, ElFormItem, ElSelect } from 'element-plus';
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
  ElCheckbox
} from 'element-plus';

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import './assets/css/iconfont.css'


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
app.component(ElSelect.name,ElSelect);

import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000/'
app.config.globalProperties.$axios = axios;
app.use(store).use(router).use(ElementPlus).mount('#app')

