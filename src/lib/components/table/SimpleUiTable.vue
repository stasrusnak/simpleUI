<script setup>
import { ref, computed } from "vue";
import SimpleUiIcon from "@/lib/components/SimpleUiIcon.vue";

const props = defineProps({
  head: {
    type: Array,
    required: false,
    default: () => []
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
    default: 'minimal-dark-hover'
  },
  textColor: {
    type: String,
    required: false,
    default: 'white'
  }
});

const emit = defineEmits(['sorting']);
const hoveredHead = ref(null);

const headersLowerCase = computed(() =>
    props.head?.map(header => ({
      original: header,
      lower: header.toLowerCase()
    })) || []
);

const tableHeadStyles = computed(() => ({
  'grid-template-columns': props.columnTemplates,
  backgroundColor: `var(--${props.color})`,
  color: `var(--${props.textColor})`
}));

const clickOnHead = (headerLower) => {
  emit('sorting', headerLower);
};

const getHeaderClass = (headerLower) => {
  return [
    'smpl-table-head__name',
    {
      'active': props.sortField === headerLower && hoveredHead.value === null,
      'hover': hoveredHead.value === headerLower
    }
  ];
};
</script>

<template>
  <div class="smpl-table-wrapper">
    <div class="smpl-table">
      <div class="smpl-table-head" :style="tableHeadStyles">
        <div
            v-for="(item, i) in headersLowerCase"
            :key="i"
            :class="getHeaderClass(item.lower)"
            @click="clickOnHead(item.lower)"
            @mouseover="hoveredHead = item.lower"
            @mouseleave="hoveredHead = null"
        >
          {{ item.original }}
          <span v-if="props.sortField === item.lower">
            <SimpleUiIcon
                v-if="sortType === 'asc'"
                icon="arrow-up"
                size="tiny"
            />
            <SimpleUiIcon
                v-else
                class="arrow-down"
                icon="arrow-up"
                size="tiny"
            />
          </span>
        </div>
      </div>
    </div>
    <div class="smpl-table smpl-table_content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.arrow-down {
  transform: rotateX(180deg);
}

.smpl-table {
  width: 100%;
  margin-top: 10px;
  border-radius: 7px;
  background: var(--smpl-ui-minimal-dark);

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
    background: var(--smpl-ui-white);

    &__name {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      color: white;
      font-weight: normal;
      transition: color 0.2s;

      &.active, &.hover  {
        color: var(--smpl-ui-danger);
        font-weight: bold;
      }
    }
  }

  @media screen and (max-width: 767px) {
    &-head {
      display: flex;
    }
  }
}
</style>