import { createApp, h, toRaw } from 'vue';
import '@/styles/global.scss';
import App from '@/App.vue';
import router from '@/router/index.js';
import SimpleUiCheckbox from '@/lib/components/SimpleUiCheckbox.vue';
import SimpleUiCheckboxGroup from '@/lib/components/SimpleUiCheckboxGroup.vue';

import '@/lib/styles/main.scss';
import SimpleUi from '@/lib/_index.js'

// Определение компонента SimpleUiRadio
const SimpleUiRadio = {
    name: 'SimpleUiRadio',
    render() {
        return h(SimpleUiCheckbox, {
            ...toRaw(this.$attrs),
            radio: true,
        });
    },
};

const SimpleUiRadioGroup = {
    name: 'SimpleUiRadioGroup',
    render() {
        return h(SimpleUiCheckboxGroup, {
            ...toRaw(this.$attrs),
            radio: true,
        });
    },
};

const app = createApp(App);
app.use(router);
app.use(SimpleUi);
// app.component('SimpleUiRadio', SimpleUiRadio);
// app.component('SimpleUiRadioGroup', SimpleUiRadioGroup);

// Монтирование приложения
app.mount('#app');