import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import 
{
  ElButton,
  ElHeader,
  ElAside,
  ElMain
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
app.use(store).use(router).use(ElementPlus).mount('#app')

