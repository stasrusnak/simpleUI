<script setup>

defineProps({
  height: {
    type: String,
    default: '20px',
  },
  color: {
    type: String,
    default: 'second',
  },
  rounded: {
    type: Boolean,
    default: false
  },
  percent:{
    type: Number,
    required: true
  }
})

</script>

<template>
<div class="progress__container" :style="{'background':`var(--${color})`}">
  <div class="progress"  :style="{'height':height}">
    <div class="progress__bar"  :style="{'width':percent+'%'}">
      <span class="progress__percent">{{percent+'%'}}</span>
    </div>
  </div>
</div>

</template>

<style scoped lang="scss">
.progress {
  height: 10px;
  border-radius: 4px;

  &__container {
    margin-bottom: 20px;
    overflow: hidden;
    width: 100%;
    background: var(--warning);
  }
  &__bar {
    background: var(--success);
    height: 100%;
    border-radius: 4px;
    transition: .5s;
    width: 20%;
  }
  &__percent {
    display: flex;
    justify-content: flex-end;
    text-align: center;
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 10px;
  }
}

</style>
