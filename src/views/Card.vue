<script setup>
import SimpleUiButton from "@/lib/SimpleUiButton.vue";
import SimpleUiCodeBlock from "@/lib/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/lib/SimpleUiIcon.vue";
import SimpleUiCard from "@/lib/card/SimpleUiCard.vue";
import SimpleUiCardImage from "@/lib/card/SimpleUiCardImage.vue";
import SimpleUiCardContent from "@/lib/card/SimpleUiCardContent.vue";
import SimpleUiCardHeader from "@/lib/card/SimpleUiCardHeader.vue";
import SimpleUiCardDescription from "@/lib/card/SimpleUiCardDescription.vue";
import {cardExample} from "@/utils/listOfTemplateExample.js";
import {ref} from "vue";
import SimpleUiInput from "@/lib/SimpleUiInput.vue";
import frame from '@/assets/img/Frame91.jpg'
import frameImg from '@/assets/img/Frame32.jpg'
import frameHor from '@/assets/img/470-380.jpg'


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
      <SimpleUiCard
          width="300px"
          height="auto"
      >
        <SimpleUiCardImage :src="frame"/>
        <SimpleUiCardContent>
          <SimpleUiCardHeader>SumaiL присоединился к Nigma Galaxy</SimpleUiCardHeader>
          <SimpleUiCardDescription>
            <div class="stats">
              <SimpleUiIcon size="tiny" icon="eye" color="minimal-dark-hover"></SimpleUiIcon>
              <span class="stats__text">3.5k</span>
              <SimpleUiIcon size="tiny" icon="chatbox-ellipses" color="minimal-dark-hover"></SimpleUiIcon>
              <span class="stats__text">152</span>
              <SimpleUiIcon size="tiny" icon="calendar" color="minimal-dark-hover"></SimpleUiIcon>
              <span class="stats__text"> 28 мая 2026, 15:00</span>
            </div>
          </SimpleUiCardDescription>
          <SimpleUiCardDescription>
            SumaiL Ossi is a set designer living in New York who enjoys kittens, music, and partying.
          </SimpleUiCardDescription>
        </SimpleUiCardContent>
        <SimpleUiCardContent>
          <SimpleUiButton class="btn" buttonText="Читать" color="primary" animation="swipe"></SimpleUiButton>
        </SimpleUiCardContent>
      </SimpleUiCard>

      <SimpleUiCard
          width="300px"
          height="auto"
          social
      >
        <SimpleUiCardContent spaced>
          <SimpleUiCardDescription>
            <SimpleUiIcon icon="person" size="small" color="teal" circular filled></SimpleUiIcon>
            Nigma Galaxy
          </SimpleUiCardDescription>
          <SimpleUiCardDescription>
            14h
          </SimpleUiCardDescription>
        </SimpleUiCardContent>
        <SimpleUiCardImage :src="frameImg"/>
        <SimpleUiCardContent>
          <SimpleUiCardDescription>
            The Matterhorn is a mountain of the Alps border between Italy and Switzerland.
          </SimpleUiCardDescription>
        </SimpleUiCardContent>
        <SimpleUiCardContent spaced>
          <SimpleUiCardDescription>
            <SimpleUiIcon size="tiny" icon="chatbox-ellipses" color="minimal-dark-hover" ></SimpleUiIcon>
            <span class="stats__text"> 33 comments</span>
          </SimpleUiCardDescription>
          <SimpleUiCardDescription>
            <SimpleUiIcon size="tiny" icon="heart" color="minimal-dark-hover" ></SimpleUiIcon>
            <span class="stats__text">17 likes</span>
          </SimpleUiCardDescription>
        </SimpleUiCardContent>
        <SimpleUiCardContent extra>
          <SimpleUiInput
              transparent
              class="input"
              name="width"
              placeholder="Add comment"
              label="Send"
              width="620px"
          >
            <template #append>
              <SimpleUiIcon icon="paper" size="small"></SimpleUiIcon>
            </template>
          </SimpleUiInput>
        </SimpleUiCardContent>
      </SimpleUiCard>
      <div class="wrap_card">
        <SimpleUiCard
            width="470px"
            height="auto"
            horizontal
        >
          <SimpleUiCardImage :src="frameHor"  />
          <SimpleUiCardContent>
            <SimpleUiCardHeader>SumaiL присоединился к Nigma Galaxy</SimpleUiCardHeader>
            <SimpleUiCardDescription>
              <div class="stats">
                <SimpleUiIcon size="tiny" icon="eye" color="minimal-dark-hover"></SimpleUiIcon>
                <span class="stats__text">3.5k</span>
                <SimpleUiIcon size="tiny" icon="chatbox-ellipses" color="minimal-dark-hover"></SimpleUiIcon>
                <span class="stats__text">152</span>
                <SimpleUiIcon size="tiny" icon="calendar" color="minimal-dark-hover"></SimpleUiIcon>
                <span class="stats__text"> 28 мая 2026, 15:00</span>
              </div>
            </SimpleUiCardDescription>
          </SimpleUiCardContent>
        </SimpleUiCard>

        <SimpleUiCard>
          <SimpleUiCardContent>
            <SimpleUiCardHeader>Quick Links</SimpleUiCardHeader>
            <SimpleUiCardDescription>
              <div class="links">
                <a href="#">
                  <SimpleUiIcon icon="home"/>
                  Home</a>
                <a href="#">
                  <SimpleUiIcon icon="settings"/>
                  Settings</a>
                <a href="#">
                  <SimpleUiIcon icon="person"/>
                  Profile</a>
              </div>
            </SimpleUiCardDescription>
          </SimpleUiCardContent>
        </SimpleUiCard>
      </div>
    </div>


    <transition name="fade">
      <SimpleUiCodeBlock :code="cardExample" v-show="isCardBasicShow"></SimpleUiCodeBlock>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.wrap_card{
  display: flex;
  gap: 20px;
  flex-direction: column;
}
.stats {
  display: flex;
  font-size: 13px;
  padding: 1.1rem 0;
  gap: 7px;

  &__text {
    display: flex;
    align-items: center;
    padding-right: 10px;
  }
}

.btn {
  width: 100%;
  margin: 0;
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