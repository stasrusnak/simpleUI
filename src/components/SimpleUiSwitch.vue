<script setup>

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
  secondaryColor: {
    type: String,
    default: '',
  },
  animation: {
    type: String,
    default: '',
  },
  style: {
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

}


</script>


<template>

  <div class="switch-container">
    <label
        :class="[color ? `switch switch_${color}`:'switch',
         style ? `switch_${style}`:'',
         secondaryColor ? `second-color_${secondaryColor}`:'',
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

input:not(:checked) + .slider .icon-left {
  opacity: 1;
  transition: opacity 0.4s ease 0.1s;
}

input:not(:checked) + .slider .icon-right {
  opacity: 0;
  transition: opacity 0s ease;
}


input:checked + .slider .icon-left {
  opacity: 0;
  transition: opacity 0s ease;
}

input:checked + .slider .icon-right {
  opacity: 1;
  transition: opacity 0.4s ease 0.1s;
}



input:checked + .slider:before {
  transform: translateX(26px);
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


.switch input:disabled + .slider {
  background-color: #80848f;
  border: 1px solid #80848f;
}





</style>
