<script setup>
import {computed} from "vue";
import {getFilterByColor} from '@/utils/colorFilter.js'
import {getSize} from '@/utils/IconSizeCalc.js'

const props = defineProps({
  icon: {
    type: String,
    default: '404'
  },
  color: {
    type: String,
    default: 'white'
  },
  size: {
    type: String
  },
  circular: {
    type: Boolean,
    default: false
  },
  bordered: {
    type: Boolean,
    default: false
  },
  filled: {
    type: Boolean,
    default: false
  },

});
const iconStyle = computed(() => {
  return props.filled && (props.bordered || props.circular) && !(props.bordered && props.circular) ? 'invert(100%)' : getFilterByColor(props.color);
});
const size = computed(() => {
  return getSize(props.size)
})

const iconBodyStyle = computed(() => {
  const increasedSize = `${parseInt(getSize(props.size)) * 1.5}px`;
  let borderCfg
  if (props.circular && props.bordered) {
  } else {
    borderCfg = {width: increasedSize, height: increasedSize}
    borderCfg['border-radius'] = props.circular ? '50%' : (props.bordered ? '0%' : '');
    borderCfg['box-shadow'] = '0 0 0 2px rgb(242 241 241 / 51%) inset';

    if (props.filled) {
      borderCfg['border'] = 'none';
      borderCfg['-webkit-box-shadow'] = 'none';
      borderCfg['box-shadow'] = 'none';
      borderCfg['background-color'] = props.color;
    }
  }

  return (props.bordered || props.circular) ? borderCfg : {}
});


</script>

<template>


  <div class="icon-body" :style="[iconBodyStyle]">
    <i :class="[icon ? `icon-${icon}`:'','icon']"
       :style="{
      width: size,
      height: size,
      filter:iconStyle} "> </i>
  </div>


</template>

<style scoped lang="scss">
.icon-body {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

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

.icon-information {
  background-image: url('../assets/icons/information.svg');
}

.icon-facebook {
  background-image: url('../assets/icons/facebook.svg');
}

.icon-man {
  background-image: url('../assets/icons/man.svg');
}

.icon-person {
  background-image: url('../assets/icons/person.svg');
}

.icon-paper {
  background-image: url('../assets/icons/paper.svg');
}

.icon-instagram {
  background-image: url('../assets/icons/instagram.svg');
}

.icon-pause {
  background-image: url('../assets/icons/pause.svg');
}

.icon-404 {
  background-image: url('../assets/icons/404.svg');
}

.icon-log-in {
  background-image: url('../assets/icons/log-in.svg');
}

.icon-discord {
  background-image: url('../assets/icons/discord.svg');
}

.icon-grid {
  background-image: url('../assets/icons/grid.svg');
}

.icon-image {
  background-image: url('../assets/icons/image.svg');
}

.icon-location {
  background-image: url('../assets/icons/location.svg');
}

.icon-search {
  background-image: url('../assets/icons/search.svg');
}

.icon-document {
  background-image: url('../assets/icons/document.svg');
}

.icon-eye-off {
  background-image: url('../assets/icons/eye-off.svg');
}

.icon-eye {
  background-image: url('../assets/icons/eye.svg');
}

.icon-controller {
  background-image: url('../assets/icons/controller.svg');
}

.icon-checkmark {
  background-image: url('../assets/icons/checkmark.svg');
}

.icon-calendar {
  background-image: url('../assets/icons/calendar.svg');
}

.icon-camera {
  background-image: url('../assets/icons/camera.svg');
}

.icon-caretForward {
  background-image: url('../assets/icons/caretForward.svg');
}

.icon-chatbubbles {
  background-image: url('../assets/icons/chatbubbles.svg');
}


</style>

