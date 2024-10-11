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
  if (props.group) emits('handleCheckGroup',{id:e.target.id, check:e.target.checked})
  else emits('update:checked', e.target.checked)
}
</script>


<template>
<div class="checkbox-container">
  <input
      class="checkbox"
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
.checkbox-container{
  padding-bottom: 3px;
}
.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  & + label::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 6px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  &:checked + label::before {
    border-color: var(--primary);
    background-color: var(--primary);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }

  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: var(--primary-hover);
  }

  &:not(:disabled):active + label::before {
    background-color: var(--primary);
    border: 1px solid #ECEBED;
  }

  &:focus + label::before {
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.07);
  }

  &:focus:not(:checked) + label::before {
    border-color: var(--primary);
  }

  &:disabled + label::before {
    background-color: #80848f;
    border: 1px solid #80848f;
  }
}
</style>
