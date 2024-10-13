<script setup>
import {highlight} from "../utils/codeFormatter.js"

const sizeCodeHtml = `
<div>

  <SimpleUiIcon icon="home" size="mini"></SimpleUiIcon>
  <SimpleUiIcon icon="home" size="tiny"></SimpleUiIcon>
  <SimpleUiIcon icon="home" size="small"></SimpleUiIcon>
  <SimpleUiIcon icon="home" size="large"></SimpleUiIcon>
  <SimpleUiIcon icon="home" size="big"></SimpleUiIcon>
  <SimpleUiIcon icon="home" size="huge"></SimpleUiIcon>
  <SimpleUiIcon icon="home" size="massive"></SimpleUiIcon>
</div>

    if (state == states.DOUBLE_QUOTE && char == '"' && closingCharNotEscaped) {
      state = states.NONE;
      output += char + '</span>';
      continue;
    }

`
</script>


<template>
  <h1 class="heading-1">Добро пожаловать в наш UI Kit</h1>


<!--  <div v-html="highlight(sizeCodeHtml)"></div>-->
</template>
