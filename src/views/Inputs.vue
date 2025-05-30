<script setup>
import SimpleUiButton from "@/lib/components/SimpleUiButton.vue";
import SimpleUiInput from "@/lib/components/SimpleUiInput.vue";
import SimpleUiCodeBlock from "@/lib/components/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/lib/components/SimpleUiIcon.vue";
import {emphasisExample, animationExample, isExampleButton} from "@/lib/utils/listOfTemplateExample.js";
import {ref} from "vue";
import { inputBasicExample, inputValidationExample, inputIconExample } from "@/lib/utils/listOfTemplateExample.js";

const isEmphasisShow = ref(true)
const isAnimationsShow = ref(false)
const isButtonShow = ref(false)

const inputLength = ref()
const digitsOnly = ref()
const email = ref()
const creditCard = ref()
const phoneNumber = ref()
const url = ref()
const customPattern = ref()
const iconInput = ref()
const showCountCharacter = ref('Enter text... ')
const textareaValue = ref('Write text....')

const passwordValue = ref('Ваш пароль')

const password = ref("password");

const passwordToggle = () => {
  password.value = password.value === "password" ? "" : "password";
};

const clearInput = () => {
  iconInput.value = ''
}

const isBasicCodeShow = ref(false)
const isIconCodeShow = ref(false)

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

    <h2>Basic Input</h2>
    <div class="description">
      <p>A standard input field</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isBasicCodeShow = !isBasicCodeShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line">
      <SimpleUiInput
          class="input"
          name="length"
          placeholder="Min length 3 & Max 6"
          label="Length"
          v-model:value="inputLength"
          :validationRules="[
            { type: 'minLength', value: 3, message: 'Минимальная длинна 3' },
            { type: 'maxLength', value: 6, message: 'Максимальная длинна 6' },
          ]"
      ></SimpleUiInput>

      <SimpleUiInput
          class="input"
          name="digits"
          placeholder="Digits only"
          label="Digits"
          v-model:value="digitsOnly"
          :validationRules="[
            { type: 'digitsOnly', message:'Только числа' },
          ]"
      ></SimpleUiInput>
      <SimpleUiInput
          class="input"
          name="width"
          placeholder="Custom width"
          label="Width"
          width="620px"
      ></SimpleUiInput>

      <SimpleUiInput
          class="input"
          name="email"
          placeholder="email"
          label="email"
          v-model:value="email"
          :validationRules="[
            { type: 'minLength', value: 3, message: 'Минимальная длинна 3' },
            { type: 'maxLength', value: 16, message: 'Максимальная длинна 16' },
            { type: 'email',  message: 'Введите email' },
          ]"
      ></SimpleUiInput>

      <SimpleUiInput
          class="input"
          name="creditCard"
          placeholder="Credit Card"
          label="Credit Card"
          v-model:value="creditCard"
          :validationRules="[
            { type: 'creditCard',  message: 'Неверный номер карты' },
          ]"
      ></SimpleUiInput>

      <SimpleUiInput
          class="input"
          name="phoneNumber"
          placeholder="+38(___)_______"
          label="phoneNumber"
          v-model:value="phoneNumber"
          :validationRules="[
            { type: 'phoneNumber' },
          ]"
      ></SimpleUiInput>

      <SimpleUiInput
          class="input"
          name="url"
          placeholder="Url link"
          label="Url"
          v-model:value="url"
          :validationRules="[
              { type: 'url',   message: 'Введите корректный URL' },
          ]"
      ></SimpleUiInput>

      <SimpleUiInput
          class="input"
          name="customPattern"
          placeholder="Custom Pattern"
          label="Pattern only Latin letters"
          v-model:value="customPattern"
          :validationRules="[
              { type: 'pattern', value: /^[a-zA-Z]+$/,  message: 'Только латинские символы' },
          ]"
      ></SimpleUiInput>

      <SimpleUiInput
          transparent
          class="input"
          name="transparent"
          placeholder="Custom transparent input"
          label="Transparent"
      ></SimpleUiInput>

      <SimpleUiInput
          class="input"
          name="icons"
          placeholder="Custom icons"
          label="Icons"
          width="620px"
          v-model:value="iconInput"
      >

        <template #prepend>
          <SimpleUiIcon icon="search"></SimpleUiIcon>
        </template>

        <template #append>
          <div @click="clearInput" class="button-clear">
            <b>Clear </b>
            <SimpleUiIcon icon="trash" size="small"></SimpleUiIcon>
          </div>
        </template>

      </SimpleUiInput>


      <SimpleUiInput
          class="input"
          name="Textarea"
          type="textarea"
          placeholder="Write text...."
          label="Textarea"
          rows="3"
          showCountCharacter
          v-model:value="textareaValue"
      ></SimpleUiInput>


      <SimpleUiInput
          class="input"
          name="password"
          :type="password"
          placeholder="Password"
          label="Password"
          v-model:value="passwordValue"
      >
        <template #append>
          <div @click="passwordToggle" class="button-clear">
            <SimpleUiIcon
                :icon="password === 'password' ? 'eye' : 'eye-off'"
                size="small"
            ></SimpleUiIcon>
          </div>
        </template>
      </SimpleUiInput>

      <SimpleUiInput
          class="input"
          name="showCountCharacter"
          placeholder="Enter text... character(s)"
          label="Show count character "
          showCountCharacter
          v-model:value="showCountCharacter"
      ></SimpleUiInput>

    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>

    <transition name="fade">
      <SimpleUiCodeBlock :code="inputBasicExample" v-show="isBasicCodeShow"></SimpleUiCodeBlock>
    </transition>
  </div>


</template>


<style scoped lang="scss">
.button-clear {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.input {
  margin: 10px;
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
