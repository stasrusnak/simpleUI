//for dev
import {createApp, h, toRaw} from 'vue'
import '@/styles/global.scss'
import App from '@/App.vue'
import router from "@/router/index.js";
import SimpleUiCheckbox from '@/components/SimpleUiCheckbox.vue';
import SimpleUiCheckboxGroup from '@/components/SimpleUiCheckboxGroup.vue';
import SimpleUiButton from "@/components/SimpleUiButton.vue";
import SimpleUiCodeBlock from "@/components/SimpleUiCodeBlock.vue"
import UIInputTextArea from '@/components/InputTextarea.vue';

//ко всем пропсам добавляет флаг радиобаттноа
const SimpleUiRadio = {
  render() {
    return h(SimpleUiCheckbox, {
      ...(toRaw(this.$attrs)), // Передаем все атрибуты вынув из прокси
      radio: true,
    });
  }
};
const SimpleUiRadioGroup = {
  render() {
    return h(SimpleUiCheckboxGroup, {
      ...(toRaw(this.$attrs)),
      radio: true,
    });
  }
};


createApp(App)
  .use(router)
  .component('SimpleUiRadio', SimpleUiRadio)
  .component('SimpleUiRadioGroup', SimpleUiRadioGroup)
  .mount('#app')


//for prod

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
