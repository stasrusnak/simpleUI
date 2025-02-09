<script setup>
import SimpleUiButton from "@/components/SimpleUiButton.vue";
import SimpleUiCodeBlock from "@/components/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/components/SimpleUiIcon.vue";
import SimpleUiTabs from '@/components/SimpleUiTabs.vue';
import {ref} from "vue";
import colorsList from "@/utils/colorsList.js";
import {emphasisExample, animationExample, isExampleButton} from "@/utils/listOfTemplateExample.js";

const isButtonShow = ref(false);

const tabs = [
  {name: 'JavaScript', label: 'О JavaScript'},
  {name: 'Vue', label: 'Про Vue', selected: true},
  {name: 'React', label: 'Про React', disabled: true},
  {name: 'Angular', label: 'Про Angular' },
];


const basic = [
  {name: 'HTML', label: 'О html'},
  {name: 'SCC', label: 'Про scc', selected: true},
  {name: 'React', label: 'Про React', disabled: true},
  {name: 'Angular', label: 'Про Angular' },
];
</script>

<template>
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

    <div class="line">

      <SimpleUiTabs :names="tabs" >
        <template v-slot:JavaScript>
          JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.
       </template>
        <template v-slot:Vue>
          Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity.
        </template>
        <template v-slot:React>
          React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.</template>
        <template v-slot:Angular>
          Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework, Angular has clear advantages while also providing a standard structure for developers to work with. It enables users to create large applications in a maintainable manner.
        </template>
      </SimpleUiTabs>

    </div>

    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
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

    <div class="line">


      <SimpleUiTabs :names="basic" >
        <template v-slot:HTML>
          HTML (HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/ behavior (JavaScript).
        </template>
       <template v-slot:SCC>
         Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.        </template>
        <template v-slot:React>
          React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
        </template>
        <template v-slot:Angular>
          Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework, Angular has clear advantages while also providing a standard structure for developers to work with. It enables users to create large applications in a maintainable manner.
        </template>
      </SimpleUiTabs>

    </div>

    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>
</template>

<style scoped lang="scss">
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
  font-size: 18px;
  padding-bottom: 15px;
}
</style>
