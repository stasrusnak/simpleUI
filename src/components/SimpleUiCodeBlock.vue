<script setup>
import {ref} from 'vue';
import SimpleUiButton from "@/components/SimpleUiButton.vue";

// Определяем свойства компонента
const props = defineProps({
  code: {
    type: String,
    default: 'test code'
  },
  theme: {
    type: String,
    default: 'dark'
  }
});

// Состояние кнопки и сообщения
const isCopying = ref(false);
const showCopySuccess = ref(false);

const copyCode = () => {
  navigator.clipboard.writeText(props.code);
  isCopying.value = true;
  showCopySuccess.value = true;
  setTimeout(() => {
    isCopying.value = false;
    showCopySuccess.value = false;
  }, 1500);
};

</script>

<template>
  <div :class="`code-block ${'code-block__'+theme}`">
    <SimpleUiButton
        buttonText='Copy code'
        class="copy-button"
        color="basic"
        @click="copyCode"
    ></SimpleUiButton>
    <pre ref="codeBlock">{{ code }}</pre>
    <div v-show="showCopySuccess" class="copy-success-message">Code copied!</div>
  </div>
</template>


<style scoped lang="scss">
/* Стили для блока кода */
.code-block {
  position: relative;
  padding: 20px;
  border-radius: 5px;
  overflow-x: auto;
  font-size: 13px;
  font-weight: 700;
  max-width: 700px;
  text-align: left;
  font-family: 'FreeMono', monospace; /* Ретро шрифт */
  line-height: 1.6; /* Межстрочный интервал */

  &__dark {
    color: #fff;
    background-color: #333;
  }

  &__light {
    color: #04b604;
    background-color: #f1f1f1;
  }
}

/* Стили для кнопки */
.copy-button {
  position: absolute;
  top: 4px;
  right: -4px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.copy-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.copy-button:hover {
  background-color: #0056b3;
}

/* Стили для сообщения об успешном копировании */
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
