<script setup>
import SimpleUiButton from "@/lib/SimpleUiButton.vue";
import SimpleUiSwitch from "@/lib/SimpleUiSwitch.vue";
import SimpleUiCodeBlock from "@/lib/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/lib/SimpleUiIcon.vue";
import SimpleUiProgress from "@/lib/SimpleUiProgress.vue";
import SimpleUiProgressCircle from "@/lib/SimpleUiProgressCircle.vue";
import {emphasisExample, animationExample, isExampleButton, progressBasicExample, progressCircleExample} from "@/lib/utils/listOfTemplateExample.js";
import {ref} from "vue";
import SimpleUiDropdown from "@/lib/SimpleUiDropdown.vue";
import colorsList from "@/lib/utils/colorsList.js";


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

const selectedOption = ref('info-hover')
const selectedSecondaryColor = ref('warning')
const barHeight = ref(36)
const CircleBarHeight = ref(55)

const selectSecondaryColor = (option) => {
  selectedSecondaryColor.value = option
}

const options = [...colorsList]

const isBasicCodeShow = ref(false)
const isCircleCodeShow = ref(false)

// Добавляем refs для контроля отображения кода
const isProgressBasicShow = ref(false)
const isProgressCircleShow = ref(false)
</script>

<template>
  <div class="contentBlock">
    <h1>Types</h1>
    <h2>A standard progress bar</h2>
    <div class="description">
      <p>The progress component is used to convey data visually to users. It supports both indeterminate amounts, such
        as loading or processing, and finite amounts of progress </p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isProgressBasicShow = !isProgressBasicShow">
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
      <SimpleUiCodeBlock :code="progressBasicExample" v-show="isProgressBasicShow"></SimpleUiCodeBlock>
    </transition>
  </div>
  <div class="contentBlock">
    <h2>Styles</h2>
    <div class="description">
      <p>Allows you to change switch styles depending on your project needs.</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isProgressCircleShow = !isProgressCircleShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line">
      <SimpleUiProgressCircle
          :percent="CircleBarHeight"
          color="success"
          secondary_color="minimal"
          class="circle"
      >
      </SimpleUiProgressCircle>
      <div class="dropdown_bar">
        <div>Bar height</div>
        <SimpleUiProgress
            :percent="CircleBarHeight"
            slider
            unit="%"
            v-model:unitValue="CircleBarHeight"
        ></SimpleUiProgress>

      </div>

    </div>

    <transition name="fade">
      <SimpleUiCodeBlock :code="progressCircleExample" v-show="isProgressCircleShow"></SimpleUiCodeBlock>
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
    <h2>You can use progress bar constructor</h2>
    <div class="line checkbox"/>
    <div class="line checkbox">
      <SimpleUiProgress
          :percent="32"
          :secondary_color="selectedSecondaryColor"
          :color="selectedOption"
          :height="barHeight+'px'"
      ></SimpleUiProgress>


      <div class="dropdown">
        <div>Progress color</div>
        <SimpleUiDropdown
            scrollable
            :options="options"
            color="minimal_dark"
            :label="selectedOption"
            v-model:selectOption="selectedOption"
        >
        </SimpleUiDropdown>
      </div>

      <div class="dropdown">
        <div>Bar color</div>
        <SimpleUiDropdown
            class="dropdown_button"
            scrollable
            color="minimal_dark"
            :label="selectedSecondaryColor"
        >
          <template v-slot>
            <li v-for="(option, index) in options.reverse()" :key="index" @click="selectSecondaryColor(option)"
                :class="{ 'selected-item': option === selectedSecondaryColor }"
                class="dropdown-item">
              <div v-if="option"
                   class="palitra"
                   :style="{backgroundColor:`var(--smpl-ui-${option})`}"></div>
              <div>{{ option }}</div>
            </li>
          </template>
        </SimpleUiDropdown>
      </div>

      <div class="dropdown_bar">
        <div>Bar height</div>
        <SimpleUiProgress
            :percent="barHeight"
            slider
            unit="px"
            v-model:unitValue="barHeight"
        ></SimpleUiProgress>
      </div>
    </div>

    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>

  </div>

  <div class="contentBlock">
    <h2>Slider progress</h2>
    <div class="description">
      <p>Sliders reflect a range of values along a track</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="  checkbox">
      <div class="slider_body">
        <SimpleUiProgress
            :percent="52"
            slider
            unit="%"
            color="minimal"
            secondary_color="danger"
        ></SimpleUiProgress>
        <div class="description">
          <p>You can set the primary and secondary colors, in the example <span style="color: var(--smpl-ui-danger)">red</span>
            and
            <span style="color: var(--smpl-ui-minimal)">minimal</span> <br>
            As well as different units of measurement :<br>
            <span style="color: var(--smpl-ui-info-hover)"><i>px, em, rem, %, vh, vw </i></span>
            other.
          </p>
        </div>
      </div>

    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>

</template>


<style scoped lang="scss">
.circle{
  margin-right: 25px;
}
.dropdown {
  padding: 5px;
  display: flex;
  align-items: center;

  &_bar {
    display: flex;
    align-items: center;
    min-width: 350px;
  }
   &-item {
    padding: 10px 20px;
    cursor: pointer;
    background: #16182d none;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &-item:hover {
    background-color: #23243e;
    border-radius: 7px;
    color: var(--smpl-ui-danger-hover);
  }
}
.slider_body {
  max-width: 800px;
  display: flex;
  flex-direction: column;
}
.palitra {
  width: 15px;
  height: 15px;
  background-color: #00C48C;
  margin-right: 5px;
}
.plus, .minus {
  font-size: 22px;
  text-align: center;
  vertical-align: middle;
  position: relative;
  min-width: 50px;
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

  p {
    line-height: 1.5;
  }
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
