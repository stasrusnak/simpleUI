<script setup>
import SimpleUiButton from "@/components/SimpleUiButton.vue";
const props = defineProps({
  names: {
    type: Array,
    required: true
  },
  selectedTab: {
    type: String,
    required: false
  }
})

const emit = defineEmits(['changeTab'])

const clickOnTab = (tabName) => {
  emit('changeTab', tabName)
}
</script>

<template>
  <div class="tab-nav">
    <SimpleUiButton
        color="basic"
        v-for="tab in names"
        :key="tab.name"
        :class="['tab-nav__item', {'selected': tab.name === selectedTab}]"
        @click="clickOnTab(tab.name)">{{tab.label}}
    </SimpleUiButton>
  </div>
  <div class="tab-content">
    <slot/>
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
      }

  }
  &-content {
    padding: 20px;
    border-radius: 7px;
    background:  var(--minimal-dark);
  }
}
</style>
