<script setup>
import {ref} from "vue";
import SimpleUiIcon from "@/components/SimpleUiIcon.vue";

const props = defineProps({
  head: {
    type: Array,
    required: false
  },
  columnTemplates: {
    type: String,
    required: false
  },
  sortField: {
    type: String,
    required: false
  },
  sortType: {
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
const hoveredHead = ref(null)

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
            :class="['table-head__name', {
            active: sortField === element.toLowerCase() && hoveredHead === null,
            hover: hoveredHead === element.toLowerCase()
          }]"
            v-for="(element, i) of head"
            :key="i"
            @click="clickOnHead(element)"
            @mouseover="hoveredHead = element.toLowerCase()"
            @mouseleave="hoveredHead = null"
        >
          {{ element }}
          <span v-show="sortField === element.toLowerCase()">
            <SimpleUiIcon v-if="sortType==='asc'" icon="arrow-up" size="tiny"></SimpleUiIcon>
            <SimpleUiIcon class="arrow-down" v-else icon="arrow-up" size="tiny"></SimpleUiIcon>
          </span>

        </div>
      </div>
    </div>
    <div class="table table_content">
      <slot></slot>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.arrow-down{
  -webkit-transform: rotateX(180deg);
  transform: rotateX(180deg);
}


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
      color: white;
      font-weight: normal;
      transition: color 0.2s;
      &.active, &.hover  {
        color: var(--danger);
        font-weight: bold;
      }
    }


    @media screen and (max-width: 767px) {
      display: none;
    }


  }
}

</style>