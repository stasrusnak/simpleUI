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

  <div class="smpl-switch-container">
    <label
        :class="[color ? `smpl-switch smpl-switch_${color}`:'smpl-switch',
         style ? `smpl-switch_${style}`:'',
         secondaryColor ? `smpl-switch-second-color_${secondaryColor}`:'',
         animation ? `smpl-switch_${animation}`:'']">
      <input
          type="checkbox"
          :id="id"
          :value="value"
          :checked="checked"
          :disabled="disabled"
          @input="handleClock($event)">


      <span class="smpl-switch-slider">
        <span class="smpl-switch-icon-left"><slot name="left-icon"></slot></span>
        <span class="smpl-switch-icon-right"><slot name="right-icon"></slot></span>
      </span>


    </label>
    <label :for="id" class="smpl-switch-label">{{ label }}</label>
  </div>

</template>

<style lang="scss" scoped>
@use "../styles/switchStyles";

.smpl-switch-container {
  padding-bottom: 3px;
  display: inline-flex;
  align-items: center;
  user-select: none;
  min-width: 150px;
}

.smpl-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 10px;

}

.smpl-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.smpl-switch-slider {
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



.smpl-switch-slider .smpl-switch-icon-left,
.smpl-switch-slider .smpl-switch-icon-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
}

.smpl-switch-slider .smpl-switch-icon-left {
  left: 8px;
}

.smpl-switch-slider .smpl-switch-icon-right {
  right: 8px;
  opacity: 0;
}

input:checked + .smpl-switch-slider {
  background-color: var(--smpl-ui-primary);
}

input:not(:checked) + .smpl-switch-slider .smpl-switch-icon-left {
  opacity: 1;
  transition: opacity 0.4s ease 0.1s;
}

input:not(:checked) + .smpl-switch-slider .smpl-switch-icon-right {
  opacity: 0;
  transition: opacity 0s ease;
}


input:checked + .smpl-switch-slider .smpl-switch-icon-left {
  opacity: 0;
  transition: opacity 0s ease;
}

input:checked + .smpl-switch-slider .smpl-switch-icon-right {
  opacity: 1;
  transition: opacity 0.4s ease 0.1s;
}



input:checked + .smpl-switch-slider:before {
  transform: translateX(26px);
}

.smpl-switch-slider:before {
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


.smpl-switch input:disabled + .smpl-switch-slider {
  background-color: #80848f;
  border: 1px solid #80848f;
}





</style>
