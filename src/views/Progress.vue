<script setup>
import SimpleUiButton from "@/components/SimpleUiButton.vue";
import SimpleUiSwitch from "@/components/SimpleUiSwitch.vue";
import SimpleUiCodeBlock from "@/components/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/components/SimpleUiIcon.vue";
import SimpleUiProgress from "@/components/SimpleUiProgress.vue";
import {emphasisExample, animationExample, isExampleButton} from "@/utils/listOfTemplateExample.js";
import {ref} from "vue";


const isEmphasisShow = ref(true)
const isAnimationsShow = ref(false)
const isButtonShow = ref(false)

const checkBoxActive = ref(true)

</script>

<template>
  <div class="contentBlock">
    <h1>Types</h1>
    <h2>Switch Basic</h2>
    <div class="description">
      <p>A standard Switch</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny" ></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line checkbox">
      <SimpleUiProgress
          percent="44.1"
      ></SimpleUiProgress>

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

    <div class="line checkbox color_group">
      <div class="color_group__item">
        <SimpleUiSwitch
            color="success"
            label="success"
            id="success"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="basic"
            label="basic"
            id="basic"
            checked>
        </SimpleUiSwitch>
      </div>
      <div class="color_group__item">
        <SimpleUiSwitch
            color="secondary"
            label="secondary"
            id="secondary"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="minimal"
            label="minimal"
            id="minimal"
            checked>
        </SimpleUiSwitch>
      </div>
      <div class="color_group__item">
        <SimpleUiSwitch
            color="danger"
            label="danger"
            id="danger"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="primary"
            label="primary"
            id="primary"
            checked>
        </SimpleUiSwitch>
      </div>
      <div class="color_group__item">
        <SimpleUiSwitch
            color="info"
            label="info"
            id="info"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="warning"
            label="warning"
            id="warning"
            checked>
        </SimpleUiSwitch>
      </div>
      <div class=" color_group__item">
        <SimpleUiSwitch
            color="minimal_dark"
            label="minimal dark"
            id="minimal_dark"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="secondary_lite"
            label="secondary lite"
            id="secondary_lite"
            checked>
        </SimpleUiSwitch>
      </div>
    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>

    <div class="description">
      <p>You can set the primary and secondary colors, in the example <span style="color: var(--danger)">red</span> and <span style="color: var(--primary)">blue</span></p>

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
