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
  ElInput
} from 'element-plus';

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'

const app = createApp(App)
app.component(ElButton.name, ElButton);
app.component(ElHeader.name, ElHeader);
app.component(ElAside.name, ElAside);
app.component(ElMain.name, ElMain);
app.component(ElContainer.name, ElContainer);
app.component(ElRow.name, ElRow);
app.component(ElCol.name, ElCol);
app.component(ElInput.name, ElInput);
app.use(store).use(router).use(ElementPlus).mount('#app')
