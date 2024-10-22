<script setup>
import SimpleUiButton from "@/components/SimpleUiButton.vue";
import SimpleUiSwitch from "@/components/SimpleUiSwitch.vue";
import SimpleUiCodeBlock from "@/components/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/components/SimpleUiIcon.vue";
import SimpleUiProgress from "@/components/SimpleUiProgress.vue";
import {emphasisExample, animationExample, isExampleButton} from "@/utils/listOfTemplateExample.js";
import {ref} from "vue";
import SimpleUiDropdown from "@/components/SimpleUiDropdown.vue";


const isEmphasisShow = ref(true)
const isAnimationsShow = ref(false)
const isButtonShow = ref(false)

let isProgress = ref(10)

const operation = (type) => {
  if (type == 'plus') {
    isProgress.value < 100 ? isProgress.value += 10 : isProgress.value
  } else if (type == 'minus') {
    isProgress.value > 0 ? isProgress.value -= 10 : isProgress.value
  }
}

const colors = ['Basic', 'Primary', 'Success']
const selectedOption = ref(null)
const selectedSecondaryColor = ref(null)

const selectOption = (option) => {
  selectedOption.value = option
}
const selectSecondaryColor = (option) => {
  selectedSecondaryColor.value = option
}

const options = ref(['Option 1', 'Option 2', 'Option 3'])

</script>

<template>
  <div class="contentBlock">
    <h1>Types</h1>
    <h2>Switch Basic</h2>
    <div class="description">
      <p>A standard Switch</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line checkbox">
      <SimpleUiProgress
          :percent="isProgress"
      ></SimpleUiProgress>
      <SimpleUiButton buttonText="+" class="plus" color="minimal_dark" @click="operation('plus')">
      </SimpleUiButton>
      <SimpleUiButton buttonText="-" class="minus" color="minimal_dark" @click="operation('minus')">
      </SimpleUiButton>
    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
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
    <div class="line checkbox">
      <SimpleUiProgress
          :percent="isProgress"
      ></SimpleUiProgress>
      <SimpleUiButton buttonText="+" class="plus" color="minimal_dark" @click="operation('plus')">
      </SimpleUiButton>
      <SimpleUiButton buttonText="-" class="minus" color="minimal_dark" @click="operation('minus')">
      </SimpleUiButton>

      <SimpleUiDropdown
          :options="colors"
          color="minimal_dark"
          :label="selectedOption"
          v-model:selectOption="selectOption"
      >

      </SimpleUiDropdown>

      <SimpleUiDropdown
          color="minimal_dark"
          :label="selectedSecondaryColor"
      >
        <template v-slot>
          <li v-for="(option, index) in options" :key="index" @click="selectSecondaryColor(option)"
              :class="{ 'selected-item': option === selectedSecondaryColor }"
              class="dropdown-item">
            {{ option }}
          </li>
        </template>
      </SimpleUiDropdown>
    </div>


    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>

    <div class="description">
      <p>You can set the primary and secondary colors, in the example <span style="color: var(--danger)">red</span> and
        <span style="color: var(--primary)">blue</span></p>

    </div>
    <SimpleUiSwitch
        class="line"
        label="Checkbox On/Off"
        id="checkBoxDisabled"
        color="primary"
        secondaryColor="danger"
        :checked="false"
    >
    </SimpleUiSwitch>
  </div>
  <div class="contentBlock">
    <h2>Styles</h2>
    <div class="description">
      <p>Allows you to change switch styles depending on your project needs.</p>
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
        <SimpleUiSwitch
            color="success"
            animation="square"
            label="square"
            id="square"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            label="shadow"
            animation="shadow"
            id="shadow"
            checked>
        </SimpleUiSwitch>
      </div>
      <div class="color_group__item">
        <SimpleUiSwitch
            color="secondary"
            animation="heptagon"
            label="heptagon"
            id="heptagon"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="minimal"
            animation="shadow_style"
            label="shadow_style"
            id="shadow_style"
            checked>
        </SimpleUiSwitch>
      </div>
      <div class="color_group__item">
        <SimpleUiSwitch
            color="warning"
            label="oval"
            animation="oval"
            id="oval"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="info"
            label="strip"
            animation="strip"
            id="strip"
            checked>
        </SimpleUiSwitch>
      </div>
      <div class="color_group__item">
        <SimpleUiSwitch
            color="danger"
            animation="dashed"
            label="dashed"
            checked
            id="dashed">
        </SimpleUiSwitch>
      </div>

    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>

</template>


<style scoped lang="scss">

.plus, .minus {
  font-size: 22px;
  text-align: center;
  vertical-align: middle;
  position: relative;
}

.line {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

  &_block {
    display: block;
  }
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


</style>
