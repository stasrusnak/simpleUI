<script setup>

import {ref} from "vue";

const props = defineProps({
  height: {
    type: String,
    default: '20px',
  },
  color: {
    type: String,
    default: 'minimal-dark-hover',
  },
  secondary_color: {
    type: String,
    default: 'success',
  },
  rounded: {
    type: Boolean,
    default: false
  },
  percent: {
    type: Number,
    required: true
  },
  slider:{
    type: Boolean,
    default: false
  },
})


const currentValue = ref(props.percent);

const updateValue = (event) => {
  let newValue = Math.max(0, Math.min(100, event.target.value)); // Ограничиваем значение от 0 до 100
  currentValue.value = newValue; // Обновляем текущее значение
};

</script>

<template>

  <div class="slider__container" v-if="slider" >
    <input
        type="range"
        min="0"
        max="100"
        v-model="currentValue"
        @input="updateValue"
        class="slider"
        :style="{'background':`var(--${color})`,'--thumb-color': `var(--${secondary_color})`}"
    />
    <span class="progress__percent">{{ currentValue + '%' }}</span>
  </div>

  <div class="progress__container" :style="{'background':`var(--${color})`}" v-else>
    <div class="progress" :style="{'height':height}">
      <div class="progress__bar" :style="{'width':percent+'%','background-color':`var(--${secondary_color})` }">
        <span class="progress__percent">{{ percent + '%' }}</span>
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
    border-radius: 4px;
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
    padding: 2px 0;
    border-radius: 4px;
  }
}


.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: var(--minimal-dark); /* Фоновый цвет слайдера */
  outline: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--thumb-color); /* Цвет ползунка */
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--thumb-color);
  cursor: pointer;
}

.slider__container {
  display: flex;
  width: 100%;
}
</style>
