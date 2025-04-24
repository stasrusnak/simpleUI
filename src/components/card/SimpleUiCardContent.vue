<script setup>
defineProps({
  extra: {
    type: Boolean,
    default: false
  },
  spaced: {
    type: Boolean,
    default: false
  },
})
</script>

<template>
  <div class="card-content" :class="{ extra,spaced }">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card-content {
  padding: 1rem;
  border-top: none;
  &.extra {
    border-top: 1px solid var(--primary-hover);
    display: flex;
    align-items: center;
  }
  &.spaced {
    display: flex;
    justify-content: space-between;
  }
}
</style> 