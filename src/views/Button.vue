<script setup>
import SimpleUiButton from "@/components/SimpleUiButton.vue";
import SimpleUiCodeBlock from "@/components/SimpleUiCodeBlock.vue";

</script>

<template>
  <div class="contentBlock">
     <h1>Types</h1>
     <h2>Button</h2>
     <p>A button indicates a possible user action</p>
    <div class="line">
      <SimpleUiButton buttonText="New Button"></SimpleUiButton>
    </div>
  </div>
  <div class="contentBlock">
    <h2>Emphasis</h2>
    <p>A button can be formatted to show different levels of emphasis</p>
    <div class="line">
      <SimpleUiButton buttonText="New Button" color="primary"></SimpleUiButton>
      <SimpleUiButton buttonText="New Button" color="secondry"></SimpleUiButton>
      <SimpleUiButton buttonText="New Button" color="success"></SimpleUiButton>
      <SimpleUiButton buttonText="New Button" color="info"></SimpleUiButton>
      <SimpleUiButton buttonText="New Button" color="warning"></SimpleUiButton>
      <SimpleUiButton buttonText="New Button" color="danger"></SimpleUiButton>
    </div>
  </div>
  <div class="contentBlock">
    <h2>Rounded style</h2>
    <p>A button appearance</p>
    <div class="line">
      <SimpleUiButton rounded buttonText="New Button" color="primary"></SimpleUiButton>
      <SimpleUiButton rounded buttonText="New Button" color="secondary"></SimpleUiButton>
      <SimpleUiButton rounded buttonText="New Button" color="success"></SimpleUiButton>
    </div>

    <SimpleUiCodeBlock code="  code: {
    type: String,
    default: 'test code'
  },
  theme: {
    type: String,
    default: 'dark'
  }"
    theme="dark"
    ></SimpleUiCodeBlock>
  </div>


</template>

<style scoped lang="scss">
.contentBlock{
  p{
    font-size: 18px;
    padding-bottom: 5px;
  }
  padding-bottom: 10px;
}


</style>
