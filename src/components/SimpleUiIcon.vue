<script setup>
import {computed} from "vue";

const props = defineProps({
  icon: {
    type: String,
    default: '404'
  },
  color: {
    type: String,
    default: 'white'
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
  if (props.color==='white'){
    return 'invert(100%)'
  }else {}
  return ''
});

</script>

<template>
  <i
      :class="[icon ? `icon-${icon}`:'','icon']"

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
.icon-404{
  background-image: url('../assets/icons/404.svg');
}



</style>

