<script setup>
import SimpleUiCheckbox from "@/lib/components/SimpleUiCheckbox.vue";

const emits = defineEmits(['update:value'])
const props = defineProps({
  value: {
    type: Array,
    default: [],
    required: true
  },
  radio:{
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: '',
  },
  excludable:{
    type: Boolean,
    default: false
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

const handleCheckRadioGroup = (e) =>{

    if(props.excludable){
      if (!e.check){
        let updateVal = [...props.options]
        updateVal=updateVal
            .map(opt => {
              return opt.id !== e.id ? opt.id : null
            })
            .filter(opt => opt !== null);
        console.log(updateVal)
        emits('update:value',updateVal)
      }
    } else {
      if (e.check){
        emits('update:value',[e.id])
      }

  }
}

</script>


<template>
  <div>
    <div v-for="opt in options" :key="opt.id">

      <SimpleUiRadio v-if="props.radio"
          group
          :color="props.color"
          :checked="value.includes(opt.id)"
          :label="opt.name"
          :id="opt.id"
          :value="opt.name"
          @handleCheckGroup="handleCheckRadioGroup"
      />
      <SimpleUiCheckbox v-else
          group
          :color="props.color"
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
.smpl-checkbox {
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
    border-color: var(--smpl-ui-primary);
    background-color: var(--smpl-ui-primary);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }

  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: var(--smpl-ui-primary-hover);
  }

  &:not(:disabled):active + label::before {
    background-color: var(--smpl-ui-primary);
    border: 1px solid #ECEBED;
  }

  &:focus + label::before {
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.07);
  }

  &:focus:not(:checked) + label::before {
    border-color: var(--smpl-ui-primary);
  }

  &:disabled + label::before {
    background-color: #80848f;
    border: 1px solid #80848f;
  }
}
</style>
