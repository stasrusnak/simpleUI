<script setup>
import {ref, watch, onMounted, getCurrentInstance} from "vue";
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
  transparent: {
    type: Boolean,
    default: false
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
  showCountCharacter: {
    type: Boolean,
    default: false
  },
  rows: {
    type: String,
    default: "3"
  },
  validationRules: {
    type: Array,
    default: [],
  },
})

const errors = ref([]);
const minLen = ref(0)
const maxLen = ref(0)


//Алгоритм луна на првоерку банковской карты
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
    if (rule.type === 'minLength') {
      minLen.value = rule.value
    }
    if (rule.type === 'maxLength') {
      maxLen.value = rule.value
    }


    if (rule.type === 'minLength' && value.length < rule.value) {
      errors.value.push({
        message: rule.message || `Минимальная длина: ${rule.value} символа`,
      });
    }
    if (rule.type === 'maxLength' && value.length > rule.value) {
      maxLen.value = rule.value
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
  const {refs} = getCurrentInstance();
  const prependSlot = refs.prependSlot;
  const appendSlot = refs.appendSlot;
  slotPrependWidth.value = prependSlot ? prependSlot.getBoundingClientRect().width : 0;
  slotAppendWidth.value = appendSlot ? appendSlot.getBoundingClientRect().width : 0;
  inputStyle.value = {
    ...(slotPrependWidth.value > 0 && {paddingLeft: `${slotPrependWidth.value}px`}),
    ...(slotAppendWidth.value > 0 && {paddingRight: `${slotAppendWidth.value}px`}),
  };
});

</script>

<template>
  <div class="smpl-input" :style="{width: width}">
    <div class="smpl-input__body">

      <div ref="prependSlot" v-if="$slots.prepend" class="smpl-input__slot smpl-input__slot--prepend">
        <slot name="prepend"></slot>
      </div>

      <component
          :is="type === 'textarea' ? 'textarea' : 'input'"
          :style="[errors.length && { border: '1px solid var(--smpl-ui-danger-hover)' }, inputStyle]"
          :class="['smpl-input__text', {'smpl-trans' : transparent}]"
          :type="type === 'textarea' ? undefined : type"
          :name="name"
          :id="name"
          :placeholder="placeholder"
          :value="value"
          @input="updateValue"
          :rows="type === 'textarea' ? Number(rows) : undefined"
          ref="inputRef"
      ></component>

      <label :for="name" class="smpl-input__label">{{ label }}</label>
      <span :for="name"
            class="smpl-input__count"
            v-if="value.length >0 && showCountCharacter"
      >{{ value.length + ' character(s)' }}  </span>



      <div v-if="minLen || maxLen">
        <span :for="name" class="smpl-input__count" v-if="maxLen">{{ value.length + ' / ' + maxLen }}</span>
        <span :for="name" class="smpl-input__count" v-else>{{ value.length + ' / ' + minLen }} </span>
      </div>

      <div ref="appendSlot" v-if="$slots.append" class="smpl-input__slot smpl-input__slot--append">
        <slot name="append"></slot>
      </div>

    </div>
    <TransitionGroup name="error-animation">
      <div
          class="smpl-input__error"
          v-for="(element, index) in errors"
          :key="index">
        <div class="smpl-input__error-message">{{ element.message }}</div>
      </div>
    </TransitionGroup>

  </div>


</template>

<style lang="scss" scoped>

.smpl-input__slot {
  display: flex;
  position: absolute;
  z-index: 2;
  &--prepend {
    padding: 6px;
    left: 0;
  }
  &--append {
    padding: 6px;
    right: 0;
  }
}

.smpl-input {
  position: relative;
  &__body {
    display: flex;
    align-items: center;
  }
  &__error {
    background: var(--smpl-ui-danger-hover);
    margin-top: 4px;
    border-radius: 7px;
    font-size: 13px;
    color: #fff;
    padding: 5px;
  }

  &__count {
    top: -15px;
    display: inline-flex;
    position: absolute;
    right: 3px;
    font-size: 12px;
    align-items: center;
    color: #909399;
  }
  &__text {
    border: 1px solid var(--smpl-ui-minimal-dark);
    padding: 10px;
    min-height: 40px;
    border-radius: 7px;
    font-size: 14px;
    width: 100%;
    position: relative;
    outline: none;
    z-index: 1;
    color: #fff;
    background-color: var(--smpl-ui-minimal-dark);
    &:focus {
      border: 1px solid var(--smpl-ui-primary);
      & + .smpl-input__label {
        z-index: 1;
        opacity: 1;
        top: -16px;
        font-size: 14px;
      }
    }
    &:not(:placeholder-shown) {
      & + .smpl-input__label {
        z-index: 1;
        opacity: 1;
        top: -16px;
        font-size: 14px;
      }
    }
  }
  &__label {
    font-weight: bold;
    display: block;
    position: absolute;
    top: 20px;
    left: 12px;
    opacity: 0;
    z-index: -1;
    transition: .3s;
    font-size: 13px;
    color: var(--smpl-ui-primary);
  }
  &__text::placeholder {
    color: #9ca0d2;
  }
}

textarea,
input {
  font-family: inherit;
  font-size: 16px;
}

.error-animation-enter-active,
.error-animation-leave-active {
  transition: opacity 0.5s ease;
}

.error-animation-enter-from,
.error-animation-leave-to {
  opacity: 0;
}

.smpl-trans{
  border-color: transparent !important;
  background-color: transparent;
  padding: 0;
  margin: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
}


</style>