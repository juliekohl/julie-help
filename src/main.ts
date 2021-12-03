import { createApp } from 'vue';
import App from './App.vue';
import index from './router/index';
import 'c3/c3.min.css';

createApp(App)
    .use(index)
    .mount('#app')
