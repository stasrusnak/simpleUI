<script setup>
const props = defineProps({
  columnTemplates: {
    type: String,
    required: false
  },
  bgRow: {
    type: String,
    required: false
  },
  textColor: {
    type: String,
    required: false,
    default: 'white'
  }
})
</script>


<template>
  <div
      class="smpl-table-row"
      :style="{
      'grid-template-columns': columnTemplates,
      'background-color': bgRow,
      color:`var(--${textColor})`}"

  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.smpl-table-row {
  font-size: 13px;
  border-bottom: 1px solid rgba(204, 204, 204, 0.6);
  position: relative;
  display: grid;
  column-gap: 10px;
  align-items: center;
  padding: 0 16px;
  @media screen and (max-width: 950px) {
    display: block;
  }

  &:last-child {
    border-bottom: none;
  }

  &--items-center {
    justify-items: center;
  }
}
</style>