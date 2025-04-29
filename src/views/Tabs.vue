<script setup>
import SimpleUiButton from "@/lib/components/SimpleUiButton.vue";
import SimpleUiCodeBlock from "@/lib/components/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/lib/components/SimpleUiIcon.vue";
import SimpleUiTabs from '@/lib/components/SimpleUiTabs.vue';
import {
  isExampleButton,
  tabsBasicExample,
  tabsVerticalExample,
  tabsIconExample
} from "@/lib/utils/listOfTemplateExample.js";
import SimpleUiProgress from "@/lib/components/SimpleUiProgress.vue";
import {nextTick, ref, watch} from "vue";

const animationSelected = ref(['horizontal'])
const progress = ref(0);
const isButtonShow = ref(false);
const isBasicCodeShow = ref(false)
const isVerticalCodeShow = ref(false)
const isIconCodeShow = ref(false)
const tabs = [
  {name: 'JavaScript', label: 'О JavaScript', selected: true},
  {name: 'Vue', label: 'Про Vue'},
  {name: 'React', label: 'Про React', disabled: true},
  {name: 'Angular', label: 'Про Angular'},
];
const basic = ref([
  {name: 'HTML', label: 'О html', selected: true},
  {name: 'SCC', label: 'Про scc'},
  {name: 'React', label: 'Про React', disabled: false},
  {name: 'Angular', label: 'Про Angular'},
]);
const tablist = ref([
  {name: "Tab1", label: "Вкладка ", selected: true},
  {name: "Tab2", label: "Вкладка 2", selected: false},
  {name: "Tab3", label: "Вкладка 3", selected: false},
  {name: "Tab4", label: "Вкладка 4", selected: false},
  {name: "Tab5", label: "Вкладка 5", selected: false}
]);

const example = ref([
  {name: "loading", label: "Loading..."},
  {name: "settings", label: "Settings"},
]);
const exampleGadget = ref([
  {name: "home"},
  {name: "menu"},
  {name: "settings"},
]);

watch(progress, () => {
  // Сбросить все вкладки
  tablist.value.forEach(tab => {
    tab.selected = false
  });

  if (tablist.value[progress.value]) {
    tablist.value[progress.value].selected = true;
  } else {
    progress.value--
  }
});

watch(animationSelected, () => {
  basic.value[0].selected = !basic.value[0].selected
  nextTick(() => {
    basic.value[0].selected = !basic.value[0].selected
  });
});


const animationList = ref([
  {name: 'Fade', id: 'fade'},
  {name: 'slide', id: 'slide'},
  {name: 'zoom', id: 'zoom'},
  {name: 'fold', id: 'fold'},
  {name: 'horizontal', id: 'horizontal'},
  {name: 'vertical', id: 'vertical'},
  {name: 'none', id: 'none'},
])

const isTabsBasicShow = ref(false)
const isTabsVerticalShow = ref(false)

</script>


<template>
  <div class="contentBlock">
    <h2>Vertical Tabular</h2>
    <div class="description">
      <p>You can set different animations for changing tabs</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isTabsVerticalShow = !isTabsVerticalShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="description checkGroup">
      <p>You can set different animations for changing tabs</p>
      <SimpleUiRadioGroup color="success" class="checkboxGroup" v-model:value="animationSelected"
                          :options="animationList">
      </SimpleUiRadioGroup>
    </div>
    <div class="description">
      <p>A vertical tab menu can be positioned on either side </p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line">
      <SimpleUiTabs :names="basic" vertical :animation="animationSelected[0]">

        <template v-slot:HTML>
          JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions.
          While it is most well-known as the scripting language for Web pages, many non-browser environments also use
          it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm,
          dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming)
          styles.
        </template>
        <template v-slot:SCC>
          Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and
          JavaScript and provides a declarative, component-based programming model that helps you efficiently develop
          user interfaces of any complexity.
        </template>
        <template v-slot:React>
          React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to
          make building user interfaces based on components more "seamless". It is maintained by Meta (formerly
          Facebook) and a community of individual developers and companies.
        </template>
        <template v-slot:Angular>
          Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary
          purpose is to develop single-page applications. As a framework, Angular has clear advantages while also
          providing a standard structure for developers to work with. It enables users to create large applications in a
          maintainable manner.
        </template>
      </SimpleUiTabs>

    </div>

    <transition name="fade">
      <SimpleUiCodeBlock :code="tabsVerticalExample" v-show="isTabsVerticalShow"></SimpleUiCodeBlock>
    </transition>
  </div>
  <div class="contentBlock">
    <h2>A basic Tab</h2>
    <div class="description">
      <p>The component is used for hiding content behind a selectable item. </p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>
    <p>You can set the <code>selected</code> and <code>disabled</code> tabs</p>
    <div class="line line_body">
      <SimpleUiTabs :names="tabs">
        <template v-slot:JavaScript>
          JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions.
          While it is most well-known as the scripting language for Web pages, many non-browser environments also use
          it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm,
          dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming)
          styles.
        </template>
        <template v-slot:Vue>
          Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and
          JavaScript and provides a declarative, component-based programming model that helps you efficiently develop
          user interfaces of any complexity.
        </template>
        <template v-slot:React>
          React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to
          make building user interfaces based on components more "seamless". It is maintained by Meta (formerly
          Facebook) and a community of individual developers and companies.
        </template>
        <template v-slot:Angular>
          Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary
          purpose is to develop single-page applications. As a framework, Angular has clear advantages while also
          providing a standard structure for developers to work with. It enables users to create large applications in a
          maintainable manner.
        </template>
      </SimpleUiTabs>
    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>
  <div class="contentBlock">
    <div class="description">
      <p>You can use the icon </p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line body-icon-example">
      <div class="item-example">
        <SimpleUiTabs :names="example">
          <template v-slot:loading-icon>
            <SimpleUiIcon icon="sync" loading size="small"></SimpleUiIcon>
          </template>
          <template v-slot:loading>
            Example loading slot
          </template>
          <template v-slot:settings-icon>
            <SimpleUiIcon icon="cog" size="small"></SimpleUiIcon>
          </template>
          <template v-slot:settings>
            Example settings slot
          </template>
        </SimpleUiTabs>

      </div>
      <div class="item-example nav">
        <SimpleUiTabs :names="exampleGadget">
          <template v-slot:home-icon>
            <SimpleUiIcon icon="home" size="small"></SimpleUiIcon>
          </template>
          <template v-slot:home>
            Example home slot
          </template>
          <template v-slot:menu-icon>
            <SimpleUiIcon icon="menu" size="small"></SimpleUiIcon>
          </template>
          <template v-slot:menu>
            Example menu slot
          </template>
          <template v-slot:settings-icon>
            <SimpleUiIcon icon="settings" size="small"></SimpleUiIcon>
          </template>
          <template v-slot:settings>
            Example settings slot
          </template>
        </SimpleUiTabs>
      </div>
    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>
  <div class="contentBlock">
    <h2>Active Index </h2>
    <div class="description">
      <p>A tab can be controlled component</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line">
      <div class="progress">
        <SimpleUiProgress
            :percent="progress"
            v-model:unitValue="progress"
            slider
            :min="0"
            :max="tablist.length"
            unit=" Active Index"
            color="minimal"
            secondary_color="danger"
        ></SimpleUiProgress>
      </div>

      <SimpleUiTabs :names="tablist">
        <template v-for="(tab, i) in tablist" v-slot:[tab.name]>
          Контент для вкладки {{ i > 0 ? ++i : '' }}
        </template>
      </SimpleUiTabs>
    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>


</template>

<style scoped lang="scss">
.checkboxGroup{
  display: flex;
  :deep(.checkbox-container){
    padding-right: 5px;
  }

}
.checkGroup{
  flex-direction: column;
}
.line_body{
  :deep(.tab-content) {
    min-height: 140px;
  }
}
.progress {
  min-width: 300px;
  padding-bottom: 1rem;
}

.description {
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    line-height: 1.5;
  }
}

.code_button {
  display: flex;
  margin-bottom: 1px;
}

.contentBlock {
  padding-bottom: 1px;
}

p {
  font-size: 16px;
  padding-bottom: 15px;
}

.body-icon-example{
  display: flex;
}

.item-example{
  min-width: 350px;
  flex-direction: column;

  padding-right: 20px;
}
.nav{
  /*фикс маленький отспутов кнопок навигации */
  :deep(.tab-nav) {
    margin-right: -10px;
  }
}
</style>
