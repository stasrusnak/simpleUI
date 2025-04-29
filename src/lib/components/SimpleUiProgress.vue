<script setup>
import { ref, watch } from "vue";

const emit = defineEmits(['update:unitValue']);
const props = defineProps({
  height: {
    type: String,
    default: '20px',
  },
  color: {
    type: String,
    default: 'minimal-dark-hover',
  },
  unit: {
    type: String,
    default: '%',
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
    required: true,
    default: 55
  },
  slider: {
    type: Boolean,
    default: false
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: Number,
    default: 1
  }
});

const currentPercent = props.percent
const currentValue = ref(currentPercent);

const updateValue = (event) => {
  let newValue = Math.max(props.min, Math.min(props.max, event.target.value));
  currentValue.value = newValue;
};

watch(currentValue, (newValue) => {
  emit('update:unitValue', newValue);
});
</script>

<template>
  <div class="smpl-progress-slider__container" v-if="slider">
    <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        v-model="currentPercent"
        @input="updateValue"
        class="smpl-progress-slider"
        :style="{'background':`var(--smpl-ui-${color})`,'--thumb-color': `var(--smpl-ui-${secondary_color})`}"
    />
    <span class="smpl-progress__percent">{{ currentPercent + unit }}</span>
  </div>

  <div class="smpl-progress__container" :style="{'background':`var(--smpl-ui-${color})`}" v-else>
    <div class="smpl-progress" :style="{'height':height}">
      <div class="smpl-progress__bar" :style="{'width':percent + unit ,'background-color':`var(--smpl-ui-${secondary_color})` }">
        <span class="smpl-progress__percent">{{ percent + unit }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.smpl-progress {
  height: 10px;
  border-radius: 4px;

  &__container {
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 4px;
    width: 100%;
    background: var(--smpl-ui-warning);
  }

  &__bar {
    background: var(--smpl-ui-success);
    height: 100%;
    border-radius: 4px;
    transition: .5s;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  &__percent {
    display: flex;
    justify-content: flex-end;
    text-align: center;
    font-weight: bold;
    font-size: 17px;
    padding: 2px 0;
    border-radius: 4px;
  }
}
.smpl-progress-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: var(--smpl-ui-minimal-dark);
  outline: none;
}

.smpl-progress-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--thumb-color);
  cursor: pointer;
}

.smpl-progress-slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--thumb-color);
  cursor: pointer;
}

.smpl-progress-slider__container {
  display: flex;
  width: 100%;
}
</style>
