//for dev
import {createApp} from 'vue'
import '@/styles/global.scss'
import App from '@/App.vue'
import router from "@/router/index.js";

createApp(App)
  .use(router)
  .mount('#app')


//for prod

import SimpleUiButton from "@/components/SimpleUiButton.vue";
import SimpleUiCodeBlock from "@/components/SimpleUiCodeBlock.vue"
import UIInputTextArea from '@/components/InputTextarea.vue';

const SimpleUiLibrary = {
  install(app) {
    app.component('SimpleUiButton', SimpleUiButton);
    app.component('SimpleUiTextArea', UIInputTextArea);
    app.component('SimpleUiCodeBlock', SimpleUiCodeBlock);
    // app.component('UIInputTextArea', UIInputTextArea);
    // Здесь вы можете зарегистрировать другие компоненты
  }
};

export default SimpleUiLibrary;
