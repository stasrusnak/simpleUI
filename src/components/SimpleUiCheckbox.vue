<script setup>
import { onMounted,getCurrentInstance } from 'vue'
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
  radio: {
    type: Boolean,
    default: false
  },
  group: {
    type: Boolean,
    default: false
  }
})

onMounted(()=>{

    const instance = getCurrentInstance();
    console.log(instance?.type.__name)
    if (instance?.type.__name  === 'SimpleUiRadio') {
      isRadio.value = true;
      console.log(instance?.type.__name )
    }

})

const handleClock = (e) => {
  if (props.group) emits('handleCheckGroup', {id: e.target.id, check: e.target.checked})
  else emits('update:checked', e.target.checked)
}
</script>


<template>
  <div class="checkbox-container">
    <input
        :class="[color ? `checkbox checkbox_${color}`:'checkbox',
        radio && 'radio',
        animation ? `checkbox_${animation}`:'']"
        type="checkbox"
        :id="id"
        :value="value"
        :checked="checked"
        :disabled="disabled"
        @input="handleClock($event)"/>
    <label :for="id">{{ label }}</label>
  </div>


</template>

<style lang="scss" scoped>
@import "../styles/checkboxStyles";

.checkbox-container {
  padding-bottom: 3px;
}

.radio {
  & + label::before {
    border-radius: 50%;
  }
}


</style>
