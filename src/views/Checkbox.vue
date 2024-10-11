<script setup>
import SimpleUiButton from "@/components/SimpleUiButton.vue";
import SimpleUiCheckbox from "@/components/SimpleUiCheckbox.vue";
import SimpleUiCodeBlock from "@/components/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/components/SimpleUiIcon.vue";
import {emphasisExample, animationExample, isExampleButton} from "@/utils/listOfTemplateExample.js";
import {ref} from "vue";
import SimpleUiCheckboxGroup from "@/components/SimpleUiCheckboxGroup.vue";

const isEmphasisShow = ref(true)
const isAnimationsShow = ref(false)
const isButtonShow = ref(false)

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
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
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
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
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
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>


  <div class="contentBlock">
    <h2>Emphasis</h2>
    <div class="description">
      <p>A button can be formatted to show different levels of emphasis</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isEmphasisShow = !isEmphasisShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>


    <div class="line">
      <SimpleUiButton buttonText="Basic" color="basic"></SimpleUiButton>
      <SimpleUiButton buttonText="Minimal dark" color="minimal_dark"></SimpleUiButton>
      <SimpleUiButton buttonText="Minimal" color="minimal"></SimpleUiButton>
      <SimpleUiButton buttonText="Primary" color="primary"></SimpleUiButton>
      <SimpleUiButton buttonText="Secondary" color="secondary"></SimpleUiButton>
      <SimpleUiButton buttonText="Success" color="success"></SimpleUiButton>
      <SimpleUiButton buttonText="Info" color="info"></SimpleUiButton>
      <SimpleUiButton buttonText="Warning" color="warning"></SimpleUiButton>
      <SimpleUiButton buttonText="Danger" color="danger"></SimpleUiButton>

    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="emphasisExample" v-show="isEmphasisShow"></SimpleUiCodeBlock>
    </transition>
  </div>

  <div class="contentBlock">
    <h2>Animations</h2>
    <div class="description">
      <p>A button can be formatted to show different levels of emphasis</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isAnimationsShow = !isAnimationsShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>
    <div class="line content_animation">
      <SimpleUiButton buttonText="Swipe" color="success" animation="swipe"></SimpleUiButton>
      <SimpleUiButton buttonText="Swipe up" color="success" animation="swipe_up"></SimpleUiButton>
      <SimpleUiButton buttonText="Swipe down" color="success" animation="swipe_down"></SimpleUiButton>
      <SimpleUiButton buttonText="Shake" color="primary" animation="shake"></SimpleUiButton>
      <SimpleUiButton buttonText="Jump" color="secondary" animation="jump"></SimpleUiButton>
      <SimpleUiButton buttonText="Spacing" color="success" animation="spacing"></SimpleUiButton>
      <SimpleUiButton buttonText="Shadow hover" color="secondary" animation="shadow_hover"></SimpleUiButton>
      <SimpleUiButton buttonText="Scale" color="success" animation="scale"></SimpleUiButton>
      <SimpleUiButton buttonText="Shadow pulse" color="info" animation="shadowPulse"></SimpleUiButton>
      <SimpleUiButton buttonText="Slide in" color="warning" animation="slideIn"></SimpleUiButton>
      <SimpleUiButton buttonText="Flicker" color="danger" animation="flicker"></SimpleUiButton>
      <SimpleUiButton buttonText="Distort" color="info" animation="distort"></SimpleUiButton>
    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="animationExample" v-show="isAnimationsShow"></SimpleUiCodeBlock>
    </transition>
  </div>

  <div class="contentBlock">

    <h2>Rounded style</h2>
    <p>A button appearance</p>
    <div class="line">
      <SimpleUiButton rounded buttonText="New Button" color="primary"></SimpleUiButton>
      <SimpleUiButton rounded buttonText="New Button" color="secondary"></SimpleUiButton>
      <SimpleUiButton rounded buttonText="New Button" color="success"></SimpleUiButton>
    </div>

    <SimpleUiCodeBlock code='
  <SimpleUiButton
    rounded
    buttonText="New Button"
    color="success"
    >
  </SimpleUiButton>
'
                       theme="dark"
    ></SimpleUiCodeBlock>
  </div>


  <i class="icon-home icon-home__white"></i>


</template>


<style scoped lang="scss">
.checkbox {
  flex-direction: column;
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
  font-size: 18px;
  padding-bottom: 15px;
}

.icon-home {
  width: 45px;
  height: 45px;
  display: block;
  background-image: url("../assets/icons/home.svg");
  background-position: center;
  background-repeat: no-repeat;

  &__white {
    filter: invert(100%);
    -webkit-filter: invert(100%);
  }
}


</style>
