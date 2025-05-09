<script setup>
import SimpleUiButton from "@/lib/components/SimpleUiButton.vue";
import SimpleUiCheckbox from "@/lib/components/SimpleUiCheckbox.vue";
import SimpleUiCodeBlock from "@/lib/components/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/lib/components/SimpleUiIcon.vue";
import {emphasisExample, animationExample, isExampleButton, checkboxBasicExample, checkboxGroupExample} from "@/lib/utils/listOfTemplateExample.js";
import {ref} from "vue";
import SimpleUiCheckboxGroup from "@/lib/components/SimpleUiCheckboxGroup.vue";

const isEmphasisShow = ref(true)
const isAnimationsShow = ref(false)
const isButtonShow = ref(false)
const isCheckboxBasicShow = ref(false)
const isCheckboxGroupShow = ref(false)

const checkBoxActive = ref(true)
const checkBoxDisabled = ref(true)
const checkBoxDisabledCheck = ref(true)

const unitList = ref([
  {name: 'Peewee', id: 'h001'},
  {name: 'Goblin', id: 'h0g1'},
  {name: 'Spider', id: 'h045'},
  {name: 'Archer', id: 'h02p'},
])

const unitSelected = ref(['h001', 'h02p'])

</script>

<template>
  <div class="contentBlock">
    <h1>Types</h1>
    <h2>Checkbox Basic</h2>
    <div class="description">
      <p>A standard Checkbox</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isCheckboxBasicShow = !isCheckboxBasicShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line checkbox">
      <SimpleUiCheckbox
          label="Checkbox Active"
          id="checkBoxActive"
          v-model:checked="checkBoxActive">
      </SimpleUiCheckbox>
    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="checkboxBasicExample" v-show="isCheckboxBasicShow"></SimpleUiCodeBlock>
    </transition>
  </div>


  <div class="contentBlock">
    <h2>Colors</h2>
    <div class="description">
      <p>Checkboxes can be colored by using any of the builtin colors</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line checkbox color_group">
      <div class="color_group__item">
        <SimpleUiCheckbox
            color="success"
            label="success"
            id="success"
            checked>
        </SimpleUiCheckbox>
        <SimpleUiCheckbox
            color="basic"
            label="basic"
            id="basic"
            checked>
        </SimpleUiCheckbox>
      </div>
      <div class="color_group__item">
        <SimpleUiCheckbox
            color="secondary"
            label="secondary"
            id="secondary"
            checked>
        </SimpleUiCheckbox>
        <SimpleUiCheckbox
            color="minimal"
            label="minimal"
            id="minimal"
            checked>
        </SimpleUiCheckbox>
      </div>
      <div class="color_group__item">
        <SimpleUiCheckbox
            color="danger"
            label="danger"
            id="danger"
            checked>
        </SimpleUiCheckbox>
        <SimpleUiCheckbox
            color="primary"
            label="primary"
            id="primary"
            checked>
        </SimpleUiCheckbox>
      </div>
      <div class="color_group__item">
        <SimpleUiCheckbox
            color="info"
            label="info"
            id="info"
            checked>
        </SimpleUiCheckbox>
        <SimpleUiCheckbox
            color="warning"
            label="warning"
            id="warning"
            checked>
        </SimpleUiCheckbox>
      </div>

    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>

  <div class="contentBlock">
    <h2>Animations</h2>
    <div class="description">
      <p>Allows you to add new effects for the checkbox.</p>
      <div class="code_button">
        <SimpleUiButton
            buttonText="View code"
            color="minimal_dark"
            @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line checkbox color_group">
      <div class="color_group__item">
        <SimpleUiCheckbox
            color="success"
            animation="tick"
            label="tick"
            id="tick"
            checked>
        </SimpleUiCheckbox>
        <SimpleUiCheckbox
            color="basic"
            label="shake"
            animation="shake"
            id="shake"
            checked>
        </SimpleUiCheckbox>
      </div>
      <div class="color_group__item">
        <SimpleUiCheckbox
            color="secondary"
            animation="jump"
            label="jump"
            id="jump"
            checked>
        </SimpleUiCheckbox>
        <SimpleUiCheckbox
            color="minimal"
            animation="shadowPulse"
            label="shadowPulse"
            id="shadowPulse"
            checked>
        </SimpleUiCheckbox>
      </div>
      <div class="color_group__item">
        <SimpleUiCheckbox
            color="danger"
            animation="scale"
            label="scale"
            id="scale">
        </SimpleUiCheckbox>
        <SimpleUiCheckbox
            color="primary"
            animation="slideIn"
            label="slideIn"
            id="slideIn"
            checked>
        </SimpleUiCheckbox>
      </div>
      <div class="color_group__item">
        <SimpleUiCheckbox
            color="info"
            label="flicker"
            animation="flicker"
            id="flicker"
            checked>
        </SimpleUiCheckbox>
        <SimpleUiCheckbox
            color="warning"
            label="distort"
            animation="distort"
            id="distort"
            checked>
        </SimpleUiCheckbox>
      </div>

    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>

  <div class="contentBlock">
    <h2>Checkbox Disabled</h2>
    <div class="description">
      <p>A checkbox can be disabled.</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>
    <div class="line checkbox">
      <SimpleUiCheckbox
          label="Checkbox Disabled"
          id="checkBoxDisabled"
          :disabled="checkBoxDisabled"
          v-model:checked="checkBoxDisabledCheck">
      </SimpleUiCheckbox>

    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>


  </div>
  <div class="contentBlock">
    <h2>Checkbox Group</h2>
    <div class="description">
      <p>Checkboxes can be grouped</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isCheckboxGroupShow = !isCheckboxGroupShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line checkbox">
      <SimpleUiCheckboxGroup
          class="checkboxGroup"
          v-model:value="unitSelected"
          :options="unitList">
      </SimpleUiCheckboxGroup>
    </div>
    <div v-if="unitSelected.length">
      <p>Selected Units id: {{ unitSelected }}</p>
    </div>

    <transition name="fade">
      <SimpleUiCodeBlock :code="checkboxGroupExample" v-show="isCheckboxGroupShow"></SimpleUiCodeBlock>
    </transition>
  </div>


</template>


<style scoped lang="scss">

.checkbox {
  flex-direction: column;
}

.color_group {
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 650px;

  &__item {
    min-width: 120px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.description {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.code_button {
  display: flex;
  margin-bottom: 1px;
}


.content_animation button {
  margin: 25px 10px 0 10px;
}

.contentBlock {
  padding-bottom: 1px;
}

p {
  font-size: 16px;
  padding-bottom: 15px;
}

.icon-home {
  width: 45px;
  height: 45px;
  display: block;
  background-image: url("../lib/resources/icons/home.svg");
  background-position: center;
  background-repeat: no-repeat;

  &__white {
    filter: invert(100%);
    -webkit-filter: invert(100%);
  }
}


</style>
