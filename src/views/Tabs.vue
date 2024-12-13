<script setup>
import SimpleUiButton from "@/components/SimpleUiButton.vue";
import SimpleUiCodeBlock from "@/components/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/components/SimpleUiIcon.vue";
import {emphasisExample, animationExample, isExampleButton} from "@/utils/listOfTemplateExample.js";
import {ref} from "vue";


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

const unitSelected = ref(['h001' ])

</script>

<template>
  <div class="contentBlock">
    <h1>Types</h1>
    <h2>Tabs</h2>
    <div class="description">
      <p>A standard radio</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line checkbox">
      <SimpleUiRadio
          label="Radio Active"
          id="Active"
          v-model:checked="checkBoxActive">
      </SimpleUiRadio>
    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>


  <div class="contentBlock">
    <h2>Colors</h2>
    <div class="description">
      <p>Radio buttons can be colored by using any of the builtin colors</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line checkbox color_group">
      <div class="color_group__item">
        <SimpleUiRadio
            color="success"
            label="success"
            id="success"
            checked>
        </SimpleUiRadio>
        <SimpleUiRadio
            color="basic"
            label="basic"
            id="basic"
            checked>
        </SimpleUiRadio>
      </div>
      <div class="color_group__item">
        <SimpleUiRadio
            color="secondary"
            label="secondary"
            id="secondary"
            checked>
        </SimpleUiRadio>
        <SimpleUiRadio
            color="minimal"
            label="minimal"
            id="minimal"
            checked>
        </SimpleUiRadio>
      </div>
      <div class="color_group__item">
        <SimpleUiRadio
            color="danger"
            label="danger"
            id="danger"
            checked>
        </SimpleUiRadio>
        <SimpleUiRadio
            color="primary"
            label="primary"
            id="primary"
            checked>
        </SimpleUiRadio>
      </div>
      <div class="color_group__item">
        <SimpleUiRadio
            color="info"
            label="info"
            id="info"
            checked>
        </SimpleUiRadio>
        <SimpleUiRadio
            color="warning"
            label="warning"
            id="warning"
            checked>
        </SimpleUiRadio>
      </div>

    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>
  <div class="contentBlock">
    <h2>Radio group</h2>
    <div class="description">
      <p>Which unit would you like the most?</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line checkbox">
      <SimpleUiRadioGroup
          class="checkboxGroup"
          v-model:value="unitSelected"
          :options="unitList">
      </SimpleUiRadioGroup>
    </div>
    <div v-if="unitSelected.length">
      <p>Selected Units id: {{ unitSelected }}</p>
    </div>

    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>
  <div class="contentBlock">
    <h2>Animations</h2>
    <div class="description">
      <p>Allows you to add new effects for the radio button.</p>
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
        <SimpleUiRadio
            color="success"
            animation="tick"
            label="tick"
            id="tick"
            checked>
        </SimpleUiRadio>
        <SimpleUiRadio
            color="basic"
            label="shake"
            animation="shake"
            id="shake"
            checked>
        </SimpleUiRadio>
      </div>
      <div class="color_group__item">
        <SimpleUiRadio
            color="secondary"
            animation="jump"
            label="jump"
            id="jump"
            checked>
        </SimpleUiRadio>
        <SimpleUiRadio
            color="minimal"
            animation="shadowPulse"
            label="shadowPulse"
            id="shadowPulse"
            checked>
        </SimpleUiRadio>
      </div>
      <div class="color_group__item">
        <SimpleUiRadio
            color="danger"
            animation="scale"
            label="scale"
            id="scale">
        </SimpleUiRadio>
        <SimpleUiRadio
            color="primary"
            animation="slideIn"
            label="slideIn"
            id="slideIn"
            checked>
        </SimpleUiRadio>
      </div>
      <div class="color_group__item">
        <SimpleUiRadio
            color="info"
            label="flicker"
            animation="flicker"
            id="flicker"
            checked>
        </SimpleUiRadio>
        <SimpleUiRadio
            color="warning"
            label="distort"
            animation="distort"
            id="distort"
            checked>
        </SimpleUiRadio>
      </div>

    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>

  <div class="contentBlock">
    <h2>Radio button Disabled</h2>
    <div class="description">
      <p>A button can be disabled.</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>
    <div class="line checkbox">
      <SimpleUiRadio
          label="Radio Disabled"
          id="RadioDisabled"
          :disabled="checkBoxDisabled"
          v-model:checked="checkBoxDisabledCheck">
      </SimpleUiRadio>
    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
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
