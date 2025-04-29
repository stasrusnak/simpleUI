<script setup>
</script>

<template>
  <div class="card-description">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card-description {
  display: flex;
  align-items: center;
  color: var(--smpl-ui-minimal-dark-hover);
  font-size: 14px;
  line-height: 1.4;
}
</style> 