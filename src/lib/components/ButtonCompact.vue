<script setup>

</script>

<template>
  <div class="smpl-btn-compact">
    <div class="smpl-btn-compact-svg">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
           stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"/>
      </svg>
      Load file
    </div>
  </div>

</template>

<style scoped lang="scss">
.smpl-btn-compact {
  height: 36px;
  width: 36px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 4px;
  padding: 4px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  transition: width 300ms ease-in-out 0s, background-color 300ms linear 200ms;
}

.smpl-btn-compact-svg {
  height: 36px;
  aspect-ratio: 1 / 1;
}

.smpl-btn-compact:hover,
.smpl-btn-compact:focus-visible {
  width: 142px;
  background-color: var(--smpl-ui-primary);
  transition: width 300ms ease-in-out 0s, background-color 100ms linear 0s;
}

.smpl-btn-compact:focus-visible {
  outline: 1px solid var(--smpl-ui-primary);
  outline-offset: 4px;
}

.smpl-btn-compact:active {
  opacity: 0.9;
}

.smpl-btn-compact::after {
  margin-left: 12px;
  animation: fadeIn 600ms linear forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

</style>
