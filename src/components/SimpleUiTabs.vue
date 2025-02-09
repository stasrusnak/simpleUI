<script setup>
import SimpleUiButton from "@/components/SimpleUiButton.vue";
import {ref} from "vue";
const props = defineProps({
  names: {
    type: Array,
    required: true
  },
})


const selectedTab = ref(null);


if (!selectedTab.value && props.names.length > 0) {
  const selectedTabItem = props.names.find(tab => tab.selected);
  selectedTab.value = selectedTabItem ? selectedTabItem.name : props.names[0].name;
}


</script>

<template>
  <div class="tab-nav">
    <SimpleUiButton
        :buttonText="tab.label"
        color="basic"
        v-for="tab in names"
        :key="tab.name"
        :disabled="tab.disabled"
        :class="['tab-nav__item', {'selected': tab.name === selectedTab}]"
        @click="selectedTab = tab.name">
    </SimpleUiButton>
  </div>
  <div class="tab-content">
    <slot :name="selectedTab"></slot>
  </div>
</template>

<style lang="scss" scoped>
.tab {

  &-nav {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      &__item {
        border: 1px solid transparent;
        background:  var(--minimal-dark);
        color: #fff;
        &:hover {
          background: var(--primary-hover);
          color: #fff;
          transition: 0.2s;
        }
        &.selected {
          background: var(--primary);
          color: #fff;
        }
        &:disabled {
          pointer-events: none; // Отключает hover/клики
          opacity: 0.6; // Делаем кнопку визуально "заблокированной"
          color: #aaa;
        }
      }

  }
  &-content {
    padding: 20px;
    border-radius: 7px;
    background:  var(--minimal-dark);
  }
}
</style>
