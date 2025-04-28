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
  loading: {
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
    <i :class="[icon ? `icon-${icon}`:'',{'spinning': loading},'icon']"
       :style="{
      width: size,
      height: size,
      filter:iconStyle} "> </i>
  </div>
</template>

<style scoped lang="scss">
@import "@/lib/styles/iconType";

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

.spinning {
  animation: spin 2.3s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>

