<script setup>
import {ref} from 'vue'
import SimpleUiTabs from '@/components/SimpleUiTabs.vue'

const tabs = [
  {name: 'About', label: 'О проекте'},
  {name: 'Vue', label: 'Про Vue'},
  {name: 'React', label: 'Про React'},
  {name: 'Angular', label: 'Про Angular'},
]
const selectedTab = ref('Vue')

const changeTab = (tabName) => {
  selectedTab.value = tabName
}
</script>

<template>
  <h1 class="heading-1">Tabs</h1>
  <SimpleUiTabs
      :names="tabs"
      :selectedTab="selectedTab"
      @changeTab="changeTab">
    <div v-if="selectedTab === 'About'">
      Lorem ipsum dolor sit amet.
    </div>
    <div v-if="selectedTab === 'Vue'">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, id.
    </div>
    <div v-if="selectedTab === 'React'">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, atque. Laborum iusto odit minus incidunt.
    </div>
    <div v-if="selectedTab === 'Angular'">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, atque. Laborum iusto odit minus incidunt.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, atque. Laborum iusto odit minus incidunt.
    </div>
  </SimpleUiTabs>
</template>