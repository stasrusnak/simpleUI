import { createApp } from 'vue';
import '@/styles/global.scss';
import App from '@/App.vue';
import router from '@/router/index.js';

import '@/lib/styles/main.scss';
import SimpleUi from '@/lib/_index.js'



const app = createApp(App);
app.use(router);
app.use(SimpleUi);

// Монтирование приложения
app.mount('#app');