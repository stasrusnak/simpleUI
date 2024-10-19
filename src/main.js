//for dev
import {createApp,h} from 'vue'
import '@/styles/global.scss'
import App from '@/App.vue'
import router from "@/router/index.js";
import SimpleUiCheckbox from '@/components/SimpleUiCheckbox.vue';
// import SimpleUiCheckboxGroup from '@/components/SimpleUiCheckboxGroup.vue.vue';

// Программно создаем компонент с дополнительными пропсами
const SimpleUiRadio = { render() { h(SimpleUiCheckbox, {radio: true})}};


createApp(App)
  .use(router)
  .component('SimpleUiRadio', SimpleUiRadio) //
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
