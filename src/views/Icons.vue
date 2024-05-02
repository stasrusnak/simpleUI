<script setup>
import SimpleUiIcon from "@/components/SimpleUiIcon.vue";
import icons from '@/utils/iconsList.js'
import {ref} from "vue";


let copyingIconCode = ref(false);
const showCopySuccess = ref(false);

const copyCode = (copyIcon) => {
  copyingIconCode = `<SimpleUiIcon icon="${copyIcon}"></SimpleUiIcon>`
  navigator.clipboard.writeText(copyingIconCode);
  showCopySuccess.value = true;
  setTimeout(() => {
    showCopySuccess.value = false;
  }, 1500);
};

</script>

<template>
  <div class="contentBlock">
    <h1>Icon Set</h1>
    <h2>Examples, click to copy</h2>
    <p>SimpleUI includes free open source icons <a class="link_blank" target="_blank" href="https://ionic.io/ionicons">Ionicons</a>
    </p>
    <div class="line">
      <div class="icon-container">
        <div v-for="(icon, index) in icons" :key="index" class="icon-item" @click="copyCode(icon)">
          <SimpleUiIcon :icon="icon"></SimpleUiIcon>
          <div class="icon-name">{{ icon }}</div>
        </div>
        <div v-if="showCopySuccess" class="copy-success-message">Code copied! {{ copyingIconCode }}</div>
      </div>
    </div>
  </div>
  <div class="contentBlock">
    <h2>Size</h2>
    <p>SimpleUI includes free open source icons <a class="link_blank" target="_blank" href="https://ionic.io/ionicons">Ionicons</a>
    </p>
    <div class="line">
      <div class="icon-container">

        <SimpleUiIcon icon="404"></SimpleUiIcon>
        <SimpleUiIcon icon="404"></SimpleUiIcon>
        <SimpleUiIcon icon="404"></SimpleUiIcon>
        <SimpleUiIcon icon="404"></SimpleUiIcon>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contentBlock {
  padding-bottom: 10px;
}

p {
  font-size: 18px;
  padding-bottom: 25px;
}

.link_blank {
  color: var(--danger)
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
  max-width: 550px;
}

.icon-item {
  flex: 1 0 20%;
  max-width: 20%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;
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
