// main.js

//for dev
import {createApp} from 'vue'
import './style.scss'
import App from './App.vue'
createApp(App)
  .mount('#app')


//for prod
import UIInputText from './components/InputText.vue';
import UIInputTextArea from './components/InputTextarea.vue';

const MyUiLibrary = {
  install(app) {
    app.component('UIInputText', UIInputText);
    app.component('UIInputTextArea', UIInputTextArea);
    // Здесь вы можете зарегистрировать другие компоненты
  }
};

export default MyUiLibrary;
