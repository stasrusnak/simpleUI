<script setup>
const props = defineProps({
  image: {
    type: Boolean,
    required: false
  },
  srcImage: {
    type: String,
    required: false
  },
  columnTitle: {
    type: String,
    required: false
  },
})
</script>

<template>
  <div class="smpl-table-column"  >
    <span class="smpl-table-column__title" v-if="columnTitle">{{ columnTitle }}: </span>
    <slot v-if="!image"></slot>
    <img v-else class="smpl-table-column-image" :src="srcImage" alt="">
  </div>
</template>


<style lang="scss" scoped>
.smpl-table-column {
  padding: 7px 0;
  position: relative;

  &-image {
    max-width: 100%;
    @media screen and (max-width: 950px) {
      max-width: 200px;
    }
  }

  &__title {
    margin-right: 5px;
    display: none;
    @media screen and (max-width: 950px) {
      display: inline-block;
    }
  }
}
</style>