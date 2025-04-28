// Импорты компонентов
import SimpleUiCheckbox from '@/lib/SimpleUiCheckbox.vue';
import SimpleUiCheckboxGroup from '@/lib/SimpleUiCheckboxGroup.vue';
import SimpleUiButton from '@/lib/SimpleUiButton.vue';
import SimpleUiCodeBlock from '@/lib/SimpleUiCodeBlock.vue';
import SimpleUiIcon from '@/lib/SimpleUiIcon.vue';
import SimpleUiProgress from '@/lib/SimpleUiProgress.vue';
import SimpleUiProgressCircle from '@/lib/SimpleUiProgressCircle.vue';
import SimpleUiInput from '@/lib/SimpleUiInput.vue';
import SimpleUiSwitch from '@/lib/SimpleUiSwitch.vue';
import SimpleUiSwitchGroup from '@/lib/SimpleUiSwitchGroup.vue';
import SimpleUiTabs from '@/lib/SimpleUiTabs.vue';
import SimpleUiDropdown from '@/lib/SimpleUiDropdown.vue';
import SimpleUiTable from '@/lib/table/SimpleUiTable.vue';
import SimpleUiTableColumn from '@/lib/table/SimpleUiTableColumn.vue';
import SimpleUiTableRow from '@/lib/table/SimpleUiTableRow.vue';
import SimpleUiCard from '@/lib/card/SimpleUiCard.vue';
import SimpleUiCardImage from '@/lib/card/SimpleUiCardImage.vue';
import SimpleUiCardContent from '@/lib/card/SimpleUiCardContent.vue';
import SimpleUiCardHeader from '@/lib/card/SimpleUiCardHeader.vue';
import SimpleUiCardDescription from '@/lib/card/SimpleUiCardDescription.vue';
import { h, toRaw } from 'vue';
import './styles/main.scss'

// Радио версии чекбоксов
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

// Соответствие компонентов и их имён
const componentMap = {
    SimpleUiButton: { component: SimpleUiButton, name: 'SimpleUiButton' },
    SimpleUiCodeBlock: { component: SimpleUiCodeBlock, name: 'SimpleUiCodeBlock' },
    SimpleUiIcon: { component: SimpleUiIcon, name: 'SimpleUiIcon' },
    SimpleUiDropdown: { component: SimpleUiDropdown, name: 'SimpleUiDropdown' },
    SimpleUiCheckbox: { component: SimpleUiCheckbox, name: 'SimpleUiCheckbox' },
    SimpleUiCheckboxGroup: { component: SimpleUiCheckboxGroup, name: 'SimpleUiCheckboxGroup' },
    SimpleUiRadio: { component: SimpleUiRadio, name: 'SimpleUiRadio' },
    SimpleUiRadioGroup: { component: SimpleUiRadioGroup, name: 'SimpleUiRadioGroup' },
    SimpleUiSwitch: { component: SimpleUiSwitch, name: 'SimpleUiSwitch' },
    SimpleUiSwitchGroup: { component: SimpleUiSwitchGroup, name: 'SimpleUiSwitchGroup' },
    SimpleUiInput: { component: SimpleUiInput, name: 'SimpleUiInput' },
    SimpleUiTabs: { component: SimpleUiTabs, name: 'SimpleUiTabs' },
    SimpleUiProgress: { component: SimpleUiProgress, name: 'SimpleUiProgress' },
    SimpleUiProgressCircle: { component: SimpleUiProgressCircle, name: 'SimpleUiProgressCircle' },
    SimpleUiTable: { component: SimpleUiTable, name: 'SimpleUiTable' },
    SimpleUiTableColumn: { component: SimpleUiTableColumn, name: 'SimpleUiTableColumn' },
    SimpleUiTableRow: { component: SimpleUiTableRow, name: 'SimpleUiTableRow' },
    SimpleUiCard: { component: SimpleUiCard, name: 'SimpleUiCard' },
    SimpleUiCardImage: { component: SimpleUiCardImage, name: 'SimpleUiCardImage' },
    SimpleUiCardContent: { component: SimpleUiCardContent, name: 'SimpleUiCardContent' },
    SimpleUiCardHeader: { component: SimpleUiCardHeader, name: 'SimpleUiCardHeader' },
    SimpleUiCardDescription: { component: SimpleUiCardDescription, name: 'SimpleUiCardDescription' },
};

// Плагин библиотеки
const SimpleUiLibrary = {
    install(app) {
        Object.values(componentMap).forEach(({ component, name }) => {
            app.component(name, component);
        });
    },
};

// Экспорт для использования
export {
    SimpleUiLibrary,
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