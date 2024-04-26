<script setup>
import {computed} from "vue";
import {getFilterByColor} from '@/utils/colorFilter.js'

const props = defineProps({
  icon: {
    type: String,
    default: '404'
  },
  color: {
    type: String,
    default: 'orange'
  },
  iconWidth: {
    type: String,
    default: '45px'
  },
  iconHeight: {
    type: String,
    default: '45px'
  },
  iconPath: {
    type: String,
    default: '../assets/icons/home.svg'
  }
});


const iconStyle = computed(() => {
  console.log(getFilterByColor(props.color))

  return getFilterByColor(props.color)
});

</script>

<template>
  <i :class="[icon ? `icon-${icon}`:'','icon']"
     :style="{
      width: iconWidth,
      height: iconHeight,
      filter: iconStyle} "></i>
</template>

<style scoped lang="scss">

.icon {
  display: block;
  background-position: center;
  background-repeat: no-repeat;
}

.icon-home {
  background-image: url('../assets/icons/home.svg');
}

.icon-menu {
  background-image: url('../assets/icons/menu.svg');
}

.icon-404 {
  background-image: url('../assets/icons/404.svg');
}


</style>

