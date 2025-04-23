<script setup>
defineProps({
  width: {
    type: String,
    default: '300px'
  },
  horizontal: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="card" :class="{ 'horizontal': horizontal }" :style="{ width }">
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
  overflow: hidden;
  
  &:hover {
    box-shadow: 0px 2px 3px 0 var(--primary-hover);
  }

  &.horizontal {
    .card-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.2) 0%,
          rgba(0, 0, 0, 0.7) 100%
        );
        backdrop-filter: blur(2px);
      }
    }

    :deep(.card-content) {
      position: relative;
      z-index: 2;
      color: white;

      .card-description {
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }
}
</style> 