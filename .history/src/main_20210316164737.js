import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { ElButton } from 'element-plus';

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')