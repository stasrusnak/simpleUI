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
// Используем ref для хранения класса
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
  animation: none;
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
  opacity: 0; /* Изначально скрыта правая иконка */
}

//.slider, .slider:before {
//  transition: background-color 0.4s ease, transform 0.4s ease;
//}
//
//.slider .icon-left,
//.slider .icon-right {
//  transition: opacity 0.4s ease;
//}



input:checked + .slider {
  background-color: var(--primary); /* цвет активного состояния */
}

input:checked + .slider .icon-left {
  opacity: 0; /* Скрываем левую иконку при активном состоянии */
}

input:checked + .slider .icon-right {
  opacity: 1; /* Показываем правую иконку */
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
    //animation: bounce 0.4s;
  }
}




.switch input:disabled + .slider  {
  background-color: #80848f;
  border: 1px solid #80848f;
}





</style>
