// Импорты компонентов
import SimpleUiCheckbox from '@/lib/components/SimpleUiCheckbox.vue';
import SimpleUiCheckboxGroup from '@/lib/components/SimpleUiCheckboxGroup.vue';
import SimpleUiButton from '@/lib/components/SimpleUiButton.vue';
import SimpleUiCodeBlock from '@/lib/components/SimpleUiCodeBlock.vue';
import SimpleUiIcon from '@/lib/components/SimpleUiIcon.vue';
import SimpleUiProgress from '@/lib/components/SimpleUiProgress.vue';
import SimpleUiProgressCircle from '@/lib/components/SimpleUiProgressCircle.vue';
import SimpleUiInput from '@/lib/components/SimpleUiInput.vue';
import SimpleUiSwitch from '@/lib/components/SimpleUiSwitch.vue';
import SimpleUiSwitchGroup from '@/lib/components/SimpleUiSwitchGroup.vue';
import SimpleUiTabs from '@/lib/components/SimpleUiTabs.vue';
import SimpleUiDropdown from '@/lib/components/SimpleUiDropdown.vue';
import SimpleUiTable from '@/lib/components/table/SimpleUiTable.vue';
import SimpleUiTableColumn from '@/lib/components/table/SimpleUiTableColumn.vue';
import SimpleUiTableRow from '@/lib/components/table/SimpleUiTableRow.vue';
import SimpleUiCard from '@/lib/components/card/SimpleUiCard.vue';
import SimpleUiCardImage from '@/lib/components/card/SimpleUiCardImage.vue';
import SimpleUiCardContent from '@/lib/components/card/SimpleUiCardContent.vue';
import SimpleUiCardHeader from '@/lib/components/card/SimpleUiCardHeader.vue';
import SimpleUiCardDescription from '@/lib/components/card/SimpleUiCardDescription.vue';
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