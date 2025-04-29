<script setup>
defineProps({
  src: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="smpl-card-image">
    <img :src="src"  >
  </div>
</template>

<style scoped lang="scss">
.smpl-card-image {
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style> 