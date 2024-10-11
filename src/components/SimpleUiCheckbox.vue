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
  <div class="checkbox-container">
    <input
        :class="[color ? `checkbox checkbox_${color}`:'checkbox']"
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




</style>
