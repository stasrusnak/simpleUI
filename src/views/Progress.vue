<script setup>
import SimpleUiButton from "@/components/SimpleUiButton.vue";
import SimpleUiSwitch from "@/components/SimpleUiSwitch.vue";
import SimpleUiCodeBlock from "@/components/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/components/SimpleUiIcon.vue";
import SimpleUiProgress from "@/components/SimpleUiProgress.vue";
import {emphasisExample, animationExample, isExampleButton} from "@/utils/listOfTemplateExample.js";
import {ref} from "vue";
import SimpleUiDropdown from "@/components/SimpleUiDropdown.vue";
import colorsList from "@/utils/colorsList.js";


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

const selectedOption = ref('success')
const selectedSecondaryColor = ref('primary')
const barHeight = ref(20)

const selectSecondaryColor = (option) => {
  selectedSecondaryColor.value = option
}

const options = [...colorsList]
</script>

<template>
  <div class="contentBlock">
    <h1>Types</h1>
    <h2>A standard progress bar</h2>
    <div class="description">
      <p>The progress component is used to convey data visually to users. It supports both indeterminate amounts, such as loading or processing, and finite amounts of progress </p>
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
          <p>You can set the primary and secondary colors, in the example <span style="color: var(--danger)">red</span> and
            <span style="color: var(--minimal)">minimal</span> <br>
            As well as different units of measurement :<br>
            <span style="color: var(--info-hover)"><i>px, em, rem, %, vh, vw </i></span>
            other.
          </p>
        </div>
      </div>

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
          :percent="32"
          :secondary_color="selectedSecondaryColor"
          :color="selectedOption"
          :height="barHeight+'px'"
      ></SimpleUiProgress>



      <div>Progress color</div>
      <SimpleUiDropdown
          scrollable
          :options="options"
          color="minimal_dark"
          :label="selectedOption"
          v-model:selectOption="selectedOption"
      >

      </SimpleUiDropdown>
      <div>Bar color</div>

      <SimpleUiDropdown
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
                 :style="{backgroundColor:`var(--${option})`}"></div>
            <div>{{ option }}</div>
          </li>
        </template>
      </SimpleUiDropdown>


      <div>Bar height</div>
      <SimpleUiProgress
          :percent="52"
          slider
          unit="px"
          v-model:unitValue="barHeight"
      ></SimpleUiProgress>
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

.slider_body{
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
  p{
    line-height: 1.5 ;
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
