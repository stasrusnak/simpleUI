// Импорты компонентов
import SimpleUiCheckbox from '@/lib/SimpleUiCheckbox.vue';
import SimpleUiCheckboxGroup from '@/lib/SimpleUiCheckboxGroup.vue';
import SimpleUiButton from "@/lib/SimpleUiButton.vue";
import SimpleUiCodeBlock from "@/lib/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/lib/SimpleUiIcon.vue";
import SimpleUiProgress from "@/lib/SimpleUiProgress.vue";
import SimpleUiProgressCircle from "@/lib/SimpleUiProgressCircle.vue";
import SimpleUiInput from "@/lib/SimpleUiInput.vue";
import SimpleUiSwitch from "@/lib/SimpleUiSwitch.vue";
import SimpleUiSwitchGroup from "@/lib/SimpleUiSwitchGroup.vue";
import SimpleUiTabs from "@/lib/SimpleUiTabs.vue";
import SimpleUiDropdown from "@/lib/SimpleUiDropdown.vue";
import SimpleUiTable from "@/lib/table/SimpleUiTable.vue";
import SimpleUiTableColumn from "@/lib/table/SimpleUiTableColumn.vue";
import SimpleUiTableRow from "@/lib/table/SimpleUiTableRow.vue";

// Карточки
import SimpleUiCard from "@/lib/card/SimpleUiCard.vue";
import SimpleUiCardImage from "@/lib/card/SimpleUiCardImage.vue";
import SimpleUiCardContent from "@/lib/card/SimpleUiCardContent.vue";
import SimpleUiCardHeader from "@/lib/card/SimpleUiCardHeader.vue";
import SimpleUiCardDescription from "@/lib/card/SimpleUiCardDescription.vue";

// Радио версии чекбоксов
import { h, toRaw } from 'vue';

const SimpleUiRadio = {
    name: 'SimpleUiRadio',
    render() {
        return h(SimpleUiCheckbox, {
            ...toRaw(this.$attrs),
            radio: true,
        });
    }
};

const SimpleUiRadioGroup = {
    name: 'SimpleUiRadioGroup',
    render() {
        return h(SimpleUiCheckboxGroup, {
            ...toRaw(this.$attrs),
            radio: true,
        });
    }
};

// Все компоненты в одном месте
const components = [
    SimpleUiButton,
    SimpleUiCodeBlock,
    SimpleUiIcon,
    SimpleUiDropdown,
    SimpleUiCheckbox,
    SimpleUiCheckboxGroup,
    SimpleUiRadio,
    SimpleUiRadioGroup,
    SimpleUiSwitch,
    SimpleUiSwitchGroup,
    SimpleUiInput,
    SimpleUiTabs,
    SimpleUiProgress,
    SimpleUiProgressCircle,
    SimpleUiTable,
    SimpleUiTableColumn,
    SimpleUiTableRow,
    SimpleUiCard,
    SimpleUiCardImage,
    SimpleUiCardContent,
    SimpleUiCardHeader,
    SimpleUiCardDescription,
];

// Плагин библиотеки
const SimpleUiLibrary = {
    install(app) {
        components.forEach((component) => {
            app.component(component.name, component);
        });
    },
};

// Экспорт для использования
export {
    SimpleUiLibrary, // Плагин целиком
    SimpleUiButton,
    SimpleUiCodeBlock,
    SimpleUiIcon,
    SimpleUiDropdown,
    SimpleUiCheckbox,
    SimpleUiCheckboxGroup,
    SimpleUiRadio,
    SimpleUiRadioGroup,
    SimpleUiSwitch,
    SimpleUiSwitchGroup,
    SimpleUiInput,
    SimpleUiTabs,
    SimpleUiProgress,
    SimpleUiProgressCircle,
    SimpleUiTable,
    SimpleUiTableColumn,
    SimpleUiTableRow,
    SimpleUiCard,
    SimpleUiCardImage,
    SimpleUiCardContent,
    SimpleUiCardHeader,
    SimpleUiCardDescription,
};

export default SimpleUiLibrary;
