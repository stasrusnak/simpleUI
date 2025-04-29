<script setup>
import { ref ,watch} from 'vue'
import SimpleUiButton from "@/lib/components/SimpleUiButton.vue";

const emits = defineEmits(['update:selectOption'])

const props = defineProps({
  options:{
    type: Array,
    default:[]
  },
  scrollable:{
    type: Boolean,
    default: false
  },
  color:{
    type:String,
    default: 'primary'
  },
  label:{
    type:String,
    default: 'Select an option'
  },
})

const isOpen = ref(false)
const selectedOption = ref(null)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const select = (option) => {
  selectedOption.value = option
  emits('update:selectOption',option)
}

watch(selectedOption, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    isOpen.value = false;
  }
});

watch(() => props.label, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    isOpen.value = false;
  }
});

</script>

<template>
  <div class="smpl-dropdown" :class="{ 'smpl-dropdown-scrollable': scrollable }">
    <SimpleUiButton
        @click="toggleDropdown"
        :color="color"
        :buttonText=" selectedOption || label || 'Select an option' "
        class="smpl-dropdown-button">
    </SimpleUiButton>
    <ul v-if="isOpen" class="smpl-dropdown-menu">
      <li v-if="options"  v-for="option in options" :key="option" @click="select(option)"
          class="smpl-dropdown-item"
          :class="{ 'smpl-dropdown-selected-item': option === selectedOption }" >
        {{ option }}
      </li>
      <slot v-if="options.length<1" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.smpl-dropdown {
  position: relative;
  display: inline-block;
}
.smpl-dropdown-button:focus {
  outline: none;
}

.smpl-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 122px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  background: #16182d;
  color: #fff;
  border-radius: 7px;
  border: 2px solid transparent;
  z-index: 1;
  white-space: nowrap;
}

.smpl-dropdown-item {
  padding: 10px 20px;
  cursor: pointer;
  background: #16182d none;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.smpl-dropdown-item:hover {
  background-color: #23243e;
  border-radius: 7px;
  color: var(--smpl-ui-danger-hover);
}

.smpl-dropdown-selected-item {
  background-color: var(--smpl-ui-minimal-dark);
  color: #ffffff;
  border-radius: 7px;
}

.smpl-dropdown-scrollable{
  .smpl-dropdown-menu {
    max-height: 300px;
    overflow-y: auto;
  }
}
</style>
