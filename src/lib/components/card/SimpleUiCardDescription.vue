<script setup>
</script>

<template>
  <div class="smpl-card-description">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.smpl-card-description {
  display: flex;
  align-items: center;
  color: var(--smpl-ui-minimal-dark-hover);
  font-size: 14px;
  line-height: 1.4;
  gap: 6px;
}
</style> 