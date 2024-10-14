<script setup>
import SimpleUiIcon from "@/components/SimpleUiIcon.vue";
import { onMounted, ref } from 'vue';

const emits = defineEmits(['update:checked', 'handleCheckGroup'])
const props = defineProps({
  id: {
    type: String,
    name: ''
  },
  value: {
    type: String,
    name: ''
  },
  label: {
    type: String,
    name: ''
  },
  checked: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: '',
  },
  animation: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false
  },
  group: {
    type: Boolean,
    default: false
  }
})
const handleClock = (e) => {
  if (props.group) emits('handleCheckGroup', {id: e.target.id, check: e.target.checked})
  else emits('update:checked', e.target.checked)

  noAnimationClass.value = false;
}

const noAnimationClass = ref(false);


</script>


<template>

  <div class="switch-container" :class="noAnimationClass ? 'no-animation' : ''" >

    <label
        :class="[color ? `switch switch_${color}`:'switch',
       animation ? `switch_${animation}`:'']">
      <input
          type="checkbox"
          :id="id"
          :value="value"
          :checked="checked"
          :disabled="disabled"
          @input="handleClock($event)">

      <span class="slider">
        <span class="icon-left"><slot name="left-icon"></slot></span>
        <span class="icon-right"><slot name="right-icon"></slot></span>
      </span>


    </label>
    <label :for="id" class="switch-label">{{ label }}</label>
  </div>

</template>

<style lang="scss" scoped>
@import "../styles/switchStyles";


.switch-container {
  padding-bottom: 3px;
  display: inline-flex;
  align-items: center;
  user-select: none;
  min-width: 150px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 10px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  cursor: pointer;
  transition: all 0.4s ease;
}

.slider .icon-left,
.slider .icon-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
}

.slider .icon-left {
  left: 8px;
}

.slider .icon-right {
  right: 8px;
  opacity: 0;
}



input:checked + .slider {
  background-color: var(--primary);
}

input:checked + .slider .icon-left {
  opacity: 0;
}

input:checked + .slider .icon-right {
  opacity: 1;
}



.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: #ffffff;
  border-radius: 50%;
  transition: 0.4s;
  box-shadow: rgba(0, 0, 0, 0.54) 0px 5px 15px;
}




input:checked + .slider:before {
  transform: translateX(26px);
}

.switch{
  &_bounce input:checked +.slider:before {
    animation: bounce 0.4s;
  }
  &_slow input:checked + .slider:before {
    transition: transform 0.9s ease-in-out;
    transform: translateX(26px);
  }
  &_slow input:not(:checked) + .slider:before {
    transition: transform 0.9s ease-in-out;
    transform: translateX(0px);
  }

  &_fade input:checked + .slider:before, {
    animation: fades 0.4s;
  }
  &_shrink input:checked + .slider:before {
    animation: shrinkGrow 0.4s;
  }
  &_waves input:checked + .slider:before {
    animation: waves 0.5s;
  }
  &_bounce_pulse input:checked + .slider:before {
    animation: bounce_pulse 0.5s;
  }
  &_splash input:checked + .slider:before {
    animation: splash 0.5s forwards;
  }
  &_splash input:not(:checked) + .slider:before {
    animation: splash-reverse 0.5s  ;
  }
  &_fly input:checked + .slider:before {
    animation: fly 0.5s forwards;
  }
  &_fly input:not(:checked) + .slider:before {
    animation: fly-back 0.5s forwards;
  }

}
@keyframes fly {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(26px);
  }
}
@keyframes fly-back {
  0% {
    transform: translateX(26px);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes splash {
  0% { transform: scale(0); opacity: 1; }
  80% { transform: scale(1); opacity: 0; }
  99% { transform: translateX(26px); opacity: 1; }
  100% {  opacity: 1; }
}
@keyframes splash-reverse {
  0% {transform: translateX(0px);opacity: 1;}
  20% {transform: scale(1); opacity: 1;}
  80% {transform: scale(0); opacity: 0;}
  100% {transform: scale(0);opacity: 1;}
}

@keyframes waves {
  0% { transform: translateX(0); }
  25% { transform: translateX(4px); }
  50% { transform: translateX(-4px); }
  75% { transform: translateX(2px); }
  100% { transform: translateX(0); }
}

@keyframes bounce_pulse {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); scale: 1.1; }
}






.switch input:disabled + .slider  {
  background-color: #80848f;
  border: 1px solid #80848f;
}

@keyframes shrinkGrow {
  0% { transform: scale(1); }
  50% { transform: scale(0.7); }
  100% { transform: scale(1); }
}
@keyframes fades {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
