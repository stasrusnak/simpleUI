<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="card-image">
    <img :src="src" :alt="alt">
  </div>
</template>

<style scoped lang="scss">
.card-image {
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
  }
}
</style> 