<script setup>
const props = defineProps({
  head: {
    type: Array,
    required: false
  },
  columnTemplates: {
    type: String,
    required: false
  },
  color: {
    type: String,
    required: false,
    default: '--minimal-dark-hover'
  },
  textColor: {
    type: String,
    required: false,
    default: 'white'
  }
})

const emit = defineEmits(['sorting'])

const clickOnHead = (name) => {
  emit('sorting', name.toLowerCase())
}
</script>

<template>
  <div class="table-wrapper">
    <div class="table">
      <div
          class="table-head"
          :style=" {'grid-template-columns': columnTemplates,
          backgroundColor: `var(--${color})`,
          color:`var(--${textColor})`} ">
        <div
            class="table-head__name"
            v-for="(element, i) of head"
            :key="i"
            @click="clickOnHead(element)">
          {{ element }}
        </div>
      </div>
    </div>
    <div class="table table_content">
      <slot></slot>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.table {
  width: 100%;
  margin-top: 10px;
  border-radius: 7px;
  background: var(--minimal-dark);

  &-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  &-head {
    min-height: 35px;
    min-width: 122px;
    border-radius: 7px;
    cursor: pointer;
    font-size: 15px;
    padding: 5px 16px;
    display: grid;
    column-gap: 10px;
    align-items: center;
    background: var(--white);

    &__name {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
    }

    @media screen and (max-width: 767px) {
      display: none;
    }


  }
}

</style>