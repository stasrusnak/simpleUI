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
  <div class="smpl-card-content" :class="{ extra,spaced }">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.smpl-card-content {
  padding: 1rem;
  border-top: none;
  width: 100%;
  font-size: 12px;
  &.extra {
    border-top: 1px solid var(--smpl-ui-primary-hover);
    display: flex;
    align-items: center;
  }
  &.spaced {
    display: flex;
    justify-content: space-between;
  }
  :deep(.smpl-btn) {
    width: 100%;
    margin: 0;
  }
}
</style> 