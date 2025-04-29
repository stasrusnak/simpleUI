<script setup>
import {ref} from 'vue';
import SimpleUiButton from "@/lib/components/SimpleUiButton.vue";
import {highlight} from "@/lib/utils/codeFormatter.js"

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
  <div :class="`smpl-code-block smpl-code-block__${theme}`">
    <SimpleUiButton
        buttonText='Copy code'
        class="smpl-copy-button"
        color="basic"
        @click="copyCode"
    >
    </SimpleUiButton>
    <div class="smpl-code-body"  ref="codeBlock" v-html="highlight(code)"></div>
    <div v-show="showCopy" class="smpl-copy-success-message">Code copied!</div>
  </div>
</template>

<style scoped lang="scss">
.smpl-code-body{
  padding: 15px 0 15px 0;
}
.smpl-code-block {
  position: relative;
  padding: 16px;
  border-radius: 5px;
  overflow-x: auto;
  font-size: 15px;
  font-weight: 490;
  width: 100%;
  text-align: left;
  letter-spacing: 1px;
  font-family: 'Ubuntu Mono', sans-serif ;
  line-height: 1.4;
  &__dark {
    color: #6bff87;
    background-color: #333;
  }
  &__light {
    color:#6bff87;
    background-color: #f1f1f1;
  }
}

.smpl-copy-button {
  position: absolute;
  top: 4px;
  right: -4px;
}

.smpl-copy-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.smpl-copy-button:hover {
  background-color: #0056b3;
}

.smpl-copy-success-message {
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
