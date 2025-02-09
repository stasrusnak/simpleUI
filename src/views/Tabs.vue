<script setup>
import SimpleUiTabs from '@/components/SimpleUiTabs.vue'

const tabs = [
  {name: 'About', label: 'О проекте'},
  {name: 'Vue', label: 'Про Vue', selected: true},
  {name: 'React', label: 'Про React', disabled: true},
  {name: 'Angular', label: 'Про Angular'},
]

</script>

<template>
  <h1 class="heading-1">Tabs</h1>
  <SimpleUiTabs :names="tabs">
    <template v-slot:About >
      Lorem ipsum dolor sit amet.
    </template>
    <template v-slot:Vue>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, id.
    </template>
    <template v-slot:React>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, atque. Laborum iusto odit minus incidunt.
    </template>
    <template v-slot:Angular>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, atque. Laborum iusto odit minus incidunt.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, atque. Laborum iusto odit minus incidunt.
    </template>
  </SimpleUiTabs>

</template>