<script setup>
import {ref, watch, onMounted,getCurrentInstance } from "vue";

const emit = defineEmits(['update:value'])
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: '300px'
  },
  validationRules: {
    type: Array,
    default: [],
  },
})

const errors = ref([]);


//Алогоритм луна на првоерку карты
const isValidCreditCard = (number) => {
  let sum = 0;
  let shouldDouble = false;
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number[i], 10);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
};

const validate = (value) => {
  errors.value = [];
  props.validationRules.forEach((rule) => {
    if (rule.type === 'minLength' && value.length < rule.value) {
      errors.value.push({
        message: rule.message || `Минимальная длина: ${rule.value} символа`,
      });
    }
    if (rule.type === 'maxLength' && value.length > rule.value) {
      errors.value.push({
        message: rule.message || `Максимальная длина: ${rule.value} символа`,
      });
    }
    if (rule.type === 'digitsOnly' && /\D/.test(value)) {
      errors.value.push({
        message: rule.message || 'Вы можете ввести только цифры',
      });
    }
    if (rule.type === 'pattern' && !new RegExp(rule.value).test(value)) {
      errors.value.push({
        message: rule.message || 'Некорректный формат ввода',
      });
    }
    if (rule.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errors.value.push({
        message: rule.message || 'Введите корректный email',
      });
    }
    if (rule.type === 'creditCard' && !isValidCreditCard(value)) {
      errors.value.push({
        message: rule.message || 'Некорректный номер карты',
      });
    }
    if (rule.type === 'phoneNumber' && !/^(?:\+380|0)\d{9}$/.test(value)) {
      errors.value.push({
        message: rule.message || 'Не корректный номер',
      });
    }
    if (rule.type === 'url' && !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(value)) {
      errors.value.push({
        message: rule.message || 'Введите корректный URL',
      });
    }


  });
};

const updateValue = (e) => {
  emit('update:value', e.target.value)
}
watch(
    () => props.value,
    (newValue) => {
      validate(newValue);
    }
);

const slotPrependWidth = ref(0);
const slotAppendWidth = ref(0);
const inputStyle = ref({});



onMounted(() => {
  const { refs } = getCurrentInstance();
  const prependSlot = refs.prependSlot;
  const appendSlot = refs.appendSlot;
  slotPrependWidth.value = prependSlot ? prependSlot.getBoundingClientRect().width : 0;
  slotAppendWidth.value = appendSlot ? appendSlot.getBoundingClientRect().width : 0;
  inputStyle.value = {
    paddingLeft: `${slotPrependWidth.value}px`,
    paddingRight: `${slotAppendWidth.value}px`,
  };

});



</script>

<template>
  <div class="body-input" :style="{width: width}">
    <div class="body">

      <div  ref="prependSlot" v-if="$slots.prepend" class=" slot slot-prepend">
        <slot name="prepend"></slot>
      </div>
      <input
          :style="[errors.length && { border: '1px solid var(--danger-hover)' },  inputStyle  ] "
          class="input-text"
          :type="type"
          :name="name"
          :id="name"
          :placeholder="placeholder"
          :value="value"
          @input="updateValue">
      <label :for="name" class="input-label">{{ label }}</label>
      <div ref="appendSlot" v-if="$slots.append" class="slot slot-append">
        <slot name="append"></slot>
      </div>
    </div>
    <TransitionGroup name="error-animation">
      <div
          class="body-error"
          v-for="(element, index) in errors"
          :key="index">
        <div class="body-error__message">{{ element.message }}</div>
      </div>
    </TransitionGroup>

  </div>


</template>

<style lang="scss" scoped>

.slot {
  display: flex;
  position: absolute;

  &-prepend {
    left: 0;
  }

  &-append {
    right: 0;
  }
}


.body {
  display: flex;
  align-items: center;

  &-input {
    position: relative;
    align-items: center;
  }

  &-error {
    background: var(--danger-hover);
    margin-top: 4px;
    border-radius: 7px;
    font-size: 13px;
    color: #fff;
    padding: 5px;
  }
}

.input {

  &-text {
    border: 1px solid var(--minimal-dark);
    padding: 0 10px;
    height: 40px;
    border-radius: 7px;
    font-size: 16px;
    width: 100%;
    position: relative;
    outline: none;
    z-index: 1;
    color: #fff;
    background-color: var(--minimal);

    &:focus {
      border: 1px solid var(--primary);

      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -14px;
      }
    }

    &:not(:placeholder-shown) {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -14px;
      }
    }
  }

  &-label {
    font-weight: bold;
    display: block;
    position: absolute;
    top: 20px;
    left: 12px;
    opacity: 0;
    z-index: -1;
    transition: .3s;
    font-size: 13px;
    color: var(--primary);
  }

  &::placeholder {
    color: #9ca0d2;
  }
}

.error-animation-enter-active,
.error-animation-leave-active {
  transition: opacity 0.5s ease;
}

.error-animation-enter-from,
.error-animation-leave-to {
  opacity: 0;
}


</style>