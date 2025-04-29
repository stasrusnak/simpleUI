<script setup>
import colors from '@/lib/utils/colorsList.js'
import {ref} from "vue";
import {coloredExample} from "@/lib/utils/listOfTemplateExample.js";
import SimpleUiCodeBlock from "@/lib/components/SimpleUiCodeBlock.vue";

const showCopySuccess = ref(false);
let copyingIconCode = '';

const copyCode = (copyIcon) => {
  copyingIconCode = copyIcon;
  navigator.clipboard.writeText(copyingIconCode);
  showCopySuccess.value = true;
  setTimeout(() => {
    showCopySuccess.value = false;
  }, 1500);
};
</script>

<template>
  <div class="contentBlock">
    <h1>Color CSS Classes</h1>
    <h2>Examples, click to copy</h2>
    <p>These values can be used within your style sheet example: var(--<a class="link_blank" >smpl-ui-success-hover</a>);
    </p>
    <div class="line">
      <div class="icon-container">
        <div v-for="(icon, index) in colors" :key="index" class="icon-item" @click="copyCode(icon)"
             :style="{ backgroundColor: `var(--smpl-ui-${icon})` }">
          <div class="icon-name"  >{{ icon }}</div>
        </div>
        <div v-if="showCopySuccess" class="copy-success-message">Code copied! {{ copyingIconCode }}</div>
      </div>
    </div>
  </div>
  <div class="contentBlock">
    <p>An component can be formatted with different colors </p>
    <div class="line">
      <div class="icon-container">
        <div class="code-body">
          <SimpleUiCodeBlock :code="coloredExample"></SimpleUiCodeBlock>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contentBlock {
  padding-bottom: 10px;
}

p {
  font-size: 16px;
  padding-bottom: 25px;
}

.link_blank {
  color: var(--smpl-ui-info-hover);
}

.copy-success-message {
  padding: 5px 10px;
  background-color: #4caf50;
  color: #fff;
  border-radius: 4px;
  animation: fadeOut 2s ease-in-out forwards;
  width: 100%;
}

.icon-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 650px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;

  flex: 1 0 20%;
  max-width: 20%;
  padding: 22px;
  margin: 5px;
  //background-color: #7DDFC3;
}

.icon-item:hover {
  transform: scale(1.5);
}

.icon-name {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 10px;
}

.icon-item:hover .icon-name {
  opacity: 1;
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
