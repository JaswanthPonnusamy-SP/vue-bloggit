import { createApp } from 'vue'
import App from './views/App.vue'
import router from './router/index'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)
app.use(router);
app.use(ElementPlus);
app.mount('#app');