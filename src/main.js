import { createApp } from 'vue';
import App from './App.vue';
// import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
// import { ValidationObserver } from 'vee-validate';

import router from './router.js';

createApp(App)
    .use(router)
    .mount('#app')
