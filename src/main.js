//for dev
import {createApp} from 'vue'
import '@/styles/global.scss'
import App from '@/App.vue'
import router from "@/router/index.js";

createApp(App)
  .use(router)
  .mount('#app')


//for prod
import UIInputText from './components/InputText.vue';
import UIInputTextArea from './components/InputTextarea.vue';

const SimpleUiLibrary = {
  install(app) {
    app.component('UIInputText', UIInputText);
    app.component('UIInputTextArea', UIInputTextArea);
    // Здесь вы можете зарегистрировать другие компоненты
  }
};

export default SimpleUiLibrary;
