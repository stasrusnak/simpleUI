<script setup>
import Button from "@/views/Button.vue";

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
  }
})

</script>

<template>
  <button
      :class="[color ? `btn btn_${color}`:' btn',
      {'btn_rounded':rounded}]">
    {{ buttonText }}
  </button>

</template>

<style scoped lang="scss">
.btn {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 20px;
  height: 35px;
  width: 122px;
  background: #E0E1E2 none;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: .2s;

  &_basic{
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

  &_secondary{
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

  &_large {
    height: 48px;
    padding: 0 30px;
  }
}


</style>
