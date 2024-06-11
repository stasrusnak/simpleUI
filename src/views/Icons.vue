<script setup>
import SimpleUiIcon from "@/components/SimpleUiIcon.vue";
import SimpleUiCodeBlock from "@/components/SimpleUiCodeBlock.vue";
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

const sizeCodeHtml = `<div >
  <SimpleUiIcon icon="home" size="mini"></SimpleUiIcon>
  <SimpleUiIcon icon="home" size="tiny"></SimpleUiIcon>
  <SimpleUiIcon icon="home" size="small"></SimpleUiIcon>
  <SimpleUiIcon icon="home" size="large"></SimpleUiIcon>
  <SimpleUiIcon icon="home" size="big"></SimpleUiIcon>
  <SimpleUiIcon icon="home" size="huge"></SimpleUiIcon>
  <SimpleUiIcon icon="home" size="massive"></SimpleUiIcon>
</div>
`



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
    <p>An icon can vary in size </p>
    <div class="line">
      <div class="icon-container">

        <div class="icon-size-body">
          <p>mini</p>
          <SimpleUiIcon icon="home" size="mini"></SimpleUiIcon>
        </div>
        <div class="icon-size-body">
          <p>tiny</p>
          <SimpleUiIcon icon="home" size="tiny"></SimpleUiIcon>
        </div>
        <div class="icon-size-body">
          <p>small</p>
          <SimpleUiIcon icon="home" size="small"></SimpleUiIcon>
        </div>
        <div class="icon-size-body">
          <p>large</p>
          <SimpleUiIcon icon="home" size="large"></SimpleUiIcon>
        </div>
        <div class="icon-size-body">
          <p>big</p>
          <SimpleUiIcon icon="home" size="big"></SimpleUiIcon>
        </div>
        <div class="icon-size-body">
          <p>huge</p>
          <SimpleUiIcon icon="home" size="huge"></SimpleUiIcon>
        </div>
        <div class="icon-size-body">
          <p>massive</p>
          <SimpleUiIcon icon="home" size="massive" circular bordered></SimpleUiIcon>
        </div>



        <SimpleUiCodeBlock :code="sizeCodeHtml"></SimpleUiCodeBlock>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contentBlock {
  padding-bottom: 10px;
}
.icons{
  display: flex;
}
p {
  font-size: 18px;
  padding-bottom: 25px;
}

.icon-size-body {
  padding: 15px;
  text-align: center;
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
  max-width: 650px;

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
