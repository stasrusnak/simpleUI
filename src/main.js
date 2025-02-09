//for dev
import {createApp, h, toRaw} from 'vue'
import '@/styles/global.scss'
import App from '@/App.vue'
import router from "@/router/index.js";
import SimpleUiCheckbox from '@/components/SimpleUiCheckbox.vue';
import SimpleUiCheckboxGroup from '@/components/SimpleUiCheckboxGroup.vue';
import SimpleUiButton from "@/components/SimpleUiButton.vue";
import SimpleUiCodeBlock from "@/components/SimpleUiCodeBlock.vue"

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
    app.component('SimpleUiCodeBlock', SimpleUiCodeBlock);
    // Здесь вы можете зарегистрировать другие компоненты
  }
};

export default SimpleUiLibrary;
