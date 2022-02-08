import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';

import 'c3/c3.min.css';

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
