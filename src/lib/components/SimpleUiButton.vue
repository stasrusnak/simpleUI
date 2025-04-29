<script setup>
defineProps({
  buttonText: {
    type: String,
    default: '',
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
  },
  left: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
    <button
        :class="[color ? `smpl-btn smpl-btn_${color}`:'smpl-btn',
         {'smpl-btn_rounded':rounded},
          animation && `smpl-btn_${animation}`,
          animation==='spacing'?'smpl-btn-spacing_body':'']"
    >
      <div class="smpl-b" v-if="buttonText" :class="left && 'smpl-btn-text-left'">{{ buttonText }}</div>
      <slot></slot>
    </button>

</template>

<style scoped lang="scss">
@use "../styles/buttonStyles";

.smpl-btn-text-left {
  order: 2;
}

.smpl-btn {
  margin: 5px;
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

  .smpl-b {
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
    color: var(--smpl-ui-primary);
    background: #6979F800;
    border: 1px solid var(--smpl-ui-primary);

    &:enabled:hover {
      background: var(--smpl-ui-primary-hover);
      color: #ffffff;
    }
  }

  &_minimal {
    color: #ffffff;
    background: var(--smpl-ui-minimal);
    &:enabled:hover {
      background: var(--smpl-ui-primary-hover);
    }
  }
  &_minimal_dark {
    color: #ffffff;
    background: var(--smpl-ui-minimal-dark);
    &:enabled:hover {
      background: var(--smpl-ui-minimal-dark-hover);
    }
  }

  &_primary {
    color: #ffffff;
    background: var(--smpl-ui-primary);
    border: 1px solid var(--smpl-ui-primary);

    &:enabled:hover {
      background: var(--smpl-ui-primary-hover);
    }
  }

  &_secondary {
    color: #ffffff;
    background: var(--smpl-ui-second);
    border: 1px solid var(--smpl-ui-second);

    &:enabled:hover {
      background: var(--smpl-ui-second-hover);
    }
  }

  &_success {
    color: #ffffff;
    background: var(--smpl-ui-success);
    border: 1px solid var(--smpl-ui-success);

    &:enabled:hover {
      background: var(--smpl-ui-success-hover);
    }
  }

  &_info {
    color: #ffffff;
    background: var(--smpl-ui-info);
    border: 1px solid var(--smpl-ui-info);

    &:enabled:hover {
      background: var(--smpl-ui-info-hover);
    }
  }

  &_warning {
    color: #ffffff;
    background: var(--smpl-ui-warning);
    border: 1px solid var(--smpl-ui-warning);

    &:enabled:hover {
      background: var(--smpl-ui-warning-hover);
    }
  }

  &_danger {
    color: #ffffff;
    background: var(--smpl-ui-danger);
    border: 1px solid var(--smpl-ui-danger);

    &:enabled:hover {
      background: var(--smpl-ui-danger-hover);
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
