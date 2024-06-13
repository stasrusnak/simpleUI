<script setup>
import {ref} from 'vue';
import SimpleUiButton from "@/components/SimpleUiButton.vue";
import {highlight} from "../utils/codeFormater.js"

const props = defineProps({
  code: {
    type: String,
    default: ''
  },
  theme: {
    type: String,
    default: 'dark'
  }
});


const isCopying = ref(false);
const showCopy = ref(false);

const copyCode = () => {
  navigator.clipboard.writeText(props.code);
  isCopying.value = true;
  showCopy.value = true;
  setTimeout(() => {
    isCopying.value = false;
    showCopy.value = false;
  }, 1500);
};

</script>

<i class="icon-home icon-home__white"></i>

<template>
  <div :class="`code-block ${'code-block__'+theme}`">
    <SimpleUiButton
        buttonText='Copy code'
        class="copy-button"
        color="basic"
        @click="copyCode"
    >
    </SimpleUiButton>
    <div class="code-body"  ref="codeBlock" v-html="highlight(code)"></div>
    <div v-show="showCopy" class="copy-success-message">Code copied!</div>
  </div>



</template>
<style scoped lang="scss">
.code-body{
  padding: 15px 0 15px 0;
}
.code-block {
  position: relative;
  padding: 16px;
  border-radius: 5px;
  overflow-x: auto;
  font-size: 14px;
  font-weight: 650;
  //max-width: 700px;
  width: 100%;
  text-align: left;
  letter-spacing: 1px;
  font-family: 'GNU-Unifont-Full', sans-serif ;
  line-height: 1.3;
  &__dark {
    color: #6bff87;
    background-color: #333;
  }
  &__light {
    color:#6bff87;
    background-color: #f1f1f1;
  }
}

.copy-button {
  position: absolute;
  top: 4px;
  right: -4px;
}

.copy-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.copy-button:hover {
  background-color: #0056b3;
}

.copy-success-message {
  padding: 5px 10px;
  background-color: #4caf50;
  color: #fff;
  border-radius: 4px;
  animation: fadeOut 2s ease-in-out forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
