import { createApp } from 'vue';
import App from './App.vue';
// import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
// import { ValidationObserver } from 'vee-validate';

import index from './router/index';

createApp(App)
    .use(index)
    .mount('#app')