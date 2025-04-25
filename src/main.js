//for dev
import {createApp, h, toRaw} from 'vue'
import '@/styles/global.scss'
import App from '@/App.vue'
import router from "@/router/index.js"; 
import SimpleUiCheckbox from '@/components/SimpleUiCheckbox.vue';
import SimpleUiCheckboxGroup from '@/components/SimpleUiCheckboxGroup.vue';
import SimpleUiButton from "@/components/SimpleUiButton.vue";
import SimpleUiCodeBlock from "@/components/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/components/SimpleUiIcon.vue";
import SimpleUiProgress from "@/components/SimpleUiProgress.vue";
import SimpleUiProgressCircle from "@/components/SimpleUiProgressCircle.vue";
import SimpleUiInput from "@/components/SimpleUiInput.vue";
import SimpleUiSwitch from "@/components/SimpleUiSwitch.vue";
import SimpleUiSwitchGroup from "@/components/SimpleUiSwitchGroup.vue";
import SimpleUiTabs from "@/components/SimpleUiTabs.vue";
import SimpleUiDropdown from "@/components/SimpleUiDropdown.vue";
import SimpleUiTable from '@/components/table/SimpleUiTable.vue'
import SimpleUiTableRow from '@/components/table/SimpleUiTableRow.vue'
import SimpleUiTableColumn from '@/components/table/SimpleUiTableColumn.vue'
import SimpleUiCard from "@/components/card/SimpleUiCard.vue";
import SimpleUiCardImage from "@/components/card/SimpleUiCardImage.vue";
import SimpleUiCardContent from "@/components/card/SimpleUiCardContent.vue";
import SimpleUiCardHeader from "@/components/card/SimpleUiCardHeader.vue";
import SimpleUiCardDescription from "@/components/card/SimpleUiCardDescription.vue";

//ко всем пропсам добавляет флаг радиобаттноа
const SimpleUiRadio = {
  render() {
    return h(SimpleUiCheckbox, {
      ...(toRaw(this.$attrs)),
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
    app.component('SimpleUiIcon', SimpleUiIcon);
    app.component('SimpleUiDropdown', SimpleUiDropdown); 
    app.component('SimpleUiCheckbox', SimpleUiCheckbox);
    app.component('SimpleUiCheckboxGroup', SimpleUiCheckboxGroup);
    app.component('SimpleUiRadio', SimpleUiRadio);
    app.component('SimpleUiRadioGroup', SimpleUiRadioGroup);
    app.component('SimpleUiSwitch', SimpleUiSwitch);
    app.component('SimpleUiSwitchGroup', SimpleUiSwitchGroup);
    app.component('SimpleUiInput', SimpleUiInput); 
    app.component('SimpleUiTabs', SimpleUiTabs); 
    app.component('SimpleUiProgress', SimpleUiProgress);
    app.component('SimpleUiProgressCircle', SimpleUiProgressCircle); 
    app.component('SimpleUiTable', SimpleUiTable);
    app.component('SimpleUiTableColumn', SimpleUiTableColumn);
    app.component('SimpleUiTableRow', SimpleUiTableRow); 
    app.component('SimpleUiCard', SimpleUiCard);
    app.component('SimpleUiCardImage', SimpleUiCardImage);
    app.component('SimpleUiCardContent', SimpleUiCardContent);
    app.component('SimpleUiCardHeader', SimpleUiCardHeader);
    app.component('SimpleUiCardDescription', SimpleUiCardDescription);
  }
};

export default SimpleUiLibrary;
