<script setup>
import SimpleUiCheckbox from "@/components/SimpleUiCheckbox.vue";
import SimpleUiSwitch from "@/components/SimpleUiSwitch.vue;

const emits = defineEmits(['update:value'])

const props = defineProps({
  value: {
    type: Array,
    default: [],
    required: true
  },
  options: {
    type: Array,
    required: true,
    validator: (value) => {
      const hasNameKey = value.every(opt => opt.hasOwnProperty('name'))
      const hasIdKey = value.every(opt => opt.hasOwnProperty('id'))
      return hasNameKey && hasIdKey
    },
    default: []
  }
})

const handleCheckGroup = (e) =>{
let updateVal = [...props.value]
  if(e.check){
    updateVal.push(e.id)
  }else{
    updateVal=updateVal.filter(id => id !== e.id);
  }
  emits('update:value',updateVal)
}

</script>


<template>
  <div>
    <div v-for="opt in options" :key="opt.id">
      <SimpleUiCheckbox
          group
          :checked="value.includes(opt.id)"
          :label="opt.name"
          :id="opt.id"
          :value="opt.name"
          @handleCheckGroup="handleCheckGroup"
      />
    </div>
  </div>

</template>

<style lang="scss" scoped>
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
