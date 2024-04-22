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
      <SimpleUiButton buttonText="Basic" color="basic"></SimpleUiButton>
      <SimpleUiButton buttonText="Primary" color="primary"></SimpleUiButton>
      <SimpleUiButton buttonText="Secondary" color="secondary"></SimpleUiButton>
      <SimpleUiButton buttonText="Success" color="success"></SimpleUiButton>
      <SimpleUiButton buttonText="Info" color="info"></SimpleUiButton>
      <SimpleUiButton buttonText="Warning" color="warning"></SimpleUiButton>
      <SimpleUiButton buttonText="Danger" color="danger"></SimpleUiButton>
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

    <SimpleUiCodeBlock code='
  <SimpleUiButton
    rounded
    buttonText="New Button"
    color="success"
    >
  </SimpleUiButton>
     Code copied!Code copied!Code copied!Code copied!
        Code copied!
'
    theme="dark"
    ></SimpleUiCodeBlock>
  </div>


</template>

<style scoped lang="scss">
.contentBlock{

  padding-bottom: 10px;
}
p{
  font-size: 18px;
  padding-bottom: 15px;
}


</style>
