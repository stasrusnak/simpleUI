<script setup>
import { ref } from 'vue'
import SimpleUiButton from "@/components/SimpleUiButton.vue";



const props =defineProps({
  options:{
    type: Array,
    default:[]
  },
  color:{
    type:String,
    default: 'primary'
  }
})

const isOpen = ref(false)
const selectedOption = ref(null)
// const options = ['Option 1', 'Option 2', 'Option 3']

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option) => {
  selectedOption.value = option
  isOpen.value = false
}



</script>


<template>
  <div class="dropdown">
    <SimpleUiButton @click="toggleDropdown" :color="color" :buttonText=" selectedOption || 'Select an option' "  class="dropdown-button"></SimpleUiButton>
    <ul v-if="isOpen" class="dropdown-menu">
      <li v-for="option in options" :key="option" @click="selectOption(option)" class="dropdown-item">
        {{ option }}
      </li>
    </ul>

  </div>
</template>



<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-button:focus {
  outline: none;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  background: #E0E1E2 none;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 7px;
  border: 2px solid transparent;
  z-index: 1;
}

.dropdown-item {
  padding: 10px 20px;
  cursor: pointer;
  background-color: #fff;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}
</style>
