<script setup>

defineProps({
  buttonText: {
    type: String,
    default: 'Button',
    required: true,
  },
  color: {
    type: String,
    default: '',
  },
  rounded: {
    type: Boolean,
    default: false
  },
  animation: {
    type: String,
    required: false,
  }
})

</script>

<template>
    <button
        :class="[color ? `btn btn_${color}`:' btn',
         {'btn_rounded':rounded},
          animation && `btn_${animation}`,
          animation==='spacing'?'spacing_body':'']"
    >
      <p v-if="buttonText">{{ buttonText }}</p>
      <slot></slot>
    </button>



</template>

<style scoped lang="scss">
@import "../styles/buttonStyles";



.btn {
  margin-right: 10px;
  margin-bottom: 10px;
  min-height: 35px;
  min-width: 122px;
  background: #E0E1E2 none;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 7px;
  border: 2px solid transparent;
  cursor: pointer;
  font-size: 15px;
  transition: .2s;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    padding: 3px;
    display: flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  &_basic {
    color: var(--primary);
    background: #6979F800;
    border: 1px solid var(--primary);

    &:enabled:hover {
      background: var(--primary-hover);
      color: #ffffff;
    }
  }
  &_primary {
    color: #ffffff;
    background: var(--primary);
    border: 1px solid var(--primary);

    &:enabled:hover {
      background: var(--primary-hover);
    }
  }

  &_secondary {
    color: #ffffff;
    background: var(--second);
    border: 1px solid var(--second);

    &:enabled:hover {
      background: var(--second-hover);
    }
  }

  &_success {
    color: #ffffff;
    background: var(--success);
    border: 1px solid var(--success);

    &:enabled:hover {
      background: var(--success-hover);
    }
  }

  &_info {
    color: #ffffff;
    background: var(--info);
    border: 1px solid var(--info);

    &:enabled:hover {
      background: var(--info-hover);
    }
  }

  &_warning {
    color: #ffffff;
    background: var(--warning);
    border: 1px solid var(--warning);

    &:enabled:hover {
      background: var(--warning-hover);
    }
  }

  &_danger {
    color: #ffffff;
    background: var(--danger);
    border: 1px solid var(--danger);

    &:enabled:hover {
      background: var(--danger-hover);
    }
  }

  &:disabled {
    opacity: .6;
    cursor: default;
  }

  &_rounded {
    border-radius: 15px;
  }

  &_outlined {
    background: transparent;
    color: #000;

    &:hover {
      color: #fff;
    }
  }

  &_icon {
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }



}


</style>
