<script setup>
import SimpleUiButton from "@/components/SimpleUiButton.vue";
import {ref, watch} from "vue";

const props = defineProps({
  names: {
    type: Array,
    required: true
  },
  vertical: {
    type: Boolean,
    required: false
  }
})


const selectedTab = ref(null);


if (!selectedTab.value && props.names.length > 0) {
  const selectedTabItem = props.names.find(tab => tab.selected);
  selectedTab.value = selectedTabItem ? selectedTabItem.name : props.names[0].name;
}


const names  = ref([...props.names]);

function clickOnTab(tab) {
  props.names.forEach(el => {   el.selected = false  });

  tab.selected =true
  selectedTab.value = tab.name

}

// Наблюдатель за изменением массива tabs
watch(names, () => {
  console.log('Массив изменился');
  selectedTab.value  = props.names.find(tab => tab.selected)?.name;
}, { deep: true });

</script>
<!--:class="['tab-nav__item', {'selected': tab.name === selectedTab}]"-->
<template>
  <div class="tab-body" :style="{display: vertical ? 'flex' : 'block'}" >
    <div class="tab-nav" :style="{flexDirection: vertical ? 'column' : 'row'}">
      <SimpleUiButton
          :buttonText="tab.label"
          color="basic"
          v-for="tab in names"
          :key="tab.names"
          :disabled="tab.disabled"
          :class="['tab-nav__item', {'selected': tab.selected}]"
          @click="clickOnTab(tab)">
      </SimpleUiButton>
    </div>
    <div class="tab-content">
      <slot :name="selectedTab"></slot>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.tab {
  &-body {
    width: 100%;
  }

  &-nav {
    display: flex;
    align-items: center;
    padding-bottom: 5px;
    &__item {
      border: 1px solid transparent;
      background: var(--minimal-dark);
      color: #fff;

      &.selected {
        background: var(--primary);
        color: #fff;
        transition: 0.2s;
      }

      &:disabled {
        pointer-events: none;
        opacity: 0.4;
        color: #aaa;
      }
    }

  }

  &-content {
    padding: 16px;
    min-height: 50px;
    border-radius: 7px;
    background: var(--minimal-dark);
    margin: 5px;
    width: 100%;
    line-height: 1.5;
  }
}
</style>
