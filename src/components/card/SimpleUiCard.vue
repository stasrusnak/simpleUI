<script setup>
defineProps({
  width: {
    type: String,
    default: '300px'
  }
})
</script>

<template>
  <div class="card" :style="{ width }">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  border-radius: 10px;
  box-shadow:  4px 4px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0px 2px 3px 0 var(--primary-hover);
  }
}
</style> 