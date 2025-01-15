<script setup>
import SimpleUiButton from "@/components/SimpleUiButton.vue";
import SimpleUiInput from "@/components/SimpleUiInput.vue";
import SimpleUiCodeBlock from "@/components/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/components/SimpleUiIcon.vue";
import {emphasisExample, animationExample, isExampleButton} from "@/utils/listOfTemplateExample.js";
import {ref} from "vue";

const isEmphasisShow = ref(true)
const isAnimationsShow = ref(false)
const isButtonShow = ref(false)

const inputFirst = ref()

</script>

<template>
  <div class="contentBlock">
    <h1>Types</h1>
    <h2>Button</h2>
    <div class="description">
      <div class="description_body">
        <p>A button indicates a possible user action</p>
        <p>You can <i>align</i>an element inside a button, for example an icon</p>
      </div>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>





    <div class="line">
      <SimpleUiInput
          name="test"
          placeholder="123124"
          label="label123"
          v-model:value="inputFirst"
          :validationRules="[
            { type: 'minLength', value: 3, message: 'Минимальная длинна 3' },
            { type: 'maxLength', value: 6, message: 'Максимальная длинна 6' },
          ]"
      ></SimpleUiInput>



    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>



</template>


<style scoped lang="scss">

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

  &_body {
    //display: flex;
    align-items: flex-start;
    text-align: left;
    flex-direction: column;
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

  padding-bottom: 10px;
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
