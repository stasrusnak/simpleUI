<script setup>
defineProps({
  width: {
    type: String,
    default: '300px'
  },
  horizontal: {
    type: Boolean,
    default: false
  },
  social: {
    type: Boolean,
    default: false
  },

})
</script>

<template>
  <div class="card" :class="{ horizontal,social, 'card-overlay': horizontal }" :style="{ width }">
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
  box-shadow: 4px 4px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  overflow: hidden;
  height: 100%;

  &:hover {
    box-shadow: 0px 2px 3px 0 var(--primary-hover);
  }

  &.horizontal {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(9deg, rgba(2, 2, 36, 0.85) 14%, rgba(0, 212, 255, 0.15) 79%);
      z-index: 1;
      pointer-events: none;
    }
    :deep(.card-image) {
      position: relative;
      z-index: 0;
    }
    :deep(.card-content) {
      position: absolute;
      bottom: 0;
      z-index: 2;
      max-width: 300px;
    }
  }
  &.social:deep(.icon-body){
    margin-right: 5px;
  }
}
.card > :first-child {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

</style>
