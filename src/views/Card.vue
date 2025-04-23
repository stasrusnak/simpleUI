<script setup>
import SimpleUiButton from "@/components/SimpleUiButton.vue";
import SimpleUiCodeBlock from "@/components/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/components/SimpleUiIcon.vue";
import SimpleUiCard from "@/components/card/SimpleUiCard.vue";
import SimpleUiCardImage from "@/components/card/SimpleUiCardImage.vue";
import SimpleUiCardContent from "@/components/card/SimpleUiCardContent.vue";
import SimpleUiCardHeader from "@/components/card/SimpleUiCardHeader.vue";
import SimpleUiCardDescription from "@/components/card/SimpleUiCardDescription.vue";
import { cardExample } from "@/utils/listOfTemplateExample.js";
import { ref } from "vue";

const isCardBasicShow = ref(false)
</script>

<template>
  <div class="contentBlock">
    <h1>Types</h1>
    <h2>Card</h2>
    <div class="description">
      <div class="description_body">
        <p>A card displays site content in a structured way</p>
      </div>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isCardBasicShow = !isCardBasicShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line">
      <SimpleUiCard>
        <SimpleUiCardImage 
          src="https://picsum.photos/300/200" 
          alt="Random image" 
        />
        <SimpleUiCardContent>
          <SimpleUiCardHeader>SumaiL присоединился к Nigma Galaxy</SimpleUiCardHeader>
          <SimpleUiCardDescription>
            John is a software developer living in San Francisco.
          </SimpleUiCardDescription>
        </SimpleUiCardContent>
        <SimpleUiCardContent extra>
          <SimpleUiIcon icon="paper" />
          15 Friends
        </SimpleUiCardContent>
      </SimpleUiCard>

      <SimpleUiCard>
        <SimpleUiCardContent>
          <SimpleUiCardHeader>Quick Links</SimpleUiCardHeader>
          <SimpleUiCardDescription>
            <div class="links">
              <a href="#"><SimpleUiIcon icon="home" /> Home</a>
              <a href="#"><SimpleUiIcon icon="settings" /> Settings</a>
              <a href="#"><SimpleUiIcon icon="user" /> Profile</a>
            </div>
          </SimpleUiCardDescription>
        </SimpleUiCardContent>
      </SimpleUiCard>

      <SimpleUiCard>
        <SimpleUiCardImage 
          src="https://picsum.photos/300/200?random=2" 
          alt="Random image 2" 
        />
        <SimpleUiCardContent>
          <SimpleUiCardHeader>Project Alpha</SimpleUiCardHeader>
          <SimpleUiCardDescription>
            A revolutionary project that changes how we think about coding.
          </SimpleUiCardDescription>
        </SimpleUiCardContent>
        <SimpleUiCardContent extra>
          <SimpleUiIcon icon="star" />
          4.8 Rating
        </SimpleUiCardContent>
      </SimpleUiCard>
    </div>

    <transition name="fade">
      <SimpleUiCodeBlock :code="cardExample" v-show="isCardBasicShow"></SimpleUiCodeBlock>
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
    align-items: flex-start;
    text-align: left;
    flex-direction: column;
  }
}

.code_button {
  display: flex;
  margin-bottom: 1px;
}

.contentBlock {
  padding-bottom: 10px;
}

p {
  font-size: 18px;
  padding-bottom: 15px;
}

.line {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: var(--primary);
    }
  }
}
</style> 