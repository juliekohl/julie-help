import { createApp } from 'vue';
import App from './App.vue';
// import store from '@/store';
// import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
// import { ValidationObserver } from 'vee-validate';

import index from './router/index';
import '@/assets/scss/index.scss';
import {store} from "@/store";

createApp(App)
    .use(index)
    .use(store)
    .mount('#app')
