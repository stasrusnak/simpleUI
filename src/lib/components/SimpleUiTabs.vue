<script setup>
import SimpleUiButton from "@/lib/components/SimpleUiButton.vue";
import {ref, watch} from "vue";

const props = defineProps({
  names: {
    type: Array,
    required: true
  },
  vertical: {
    type: Boolean,
    required: false
  },
  animation: {
    type: String,
    default: 'horizontal',
    validator: (value) => ['fade', 'slide', 'zoom', 'fold', 'vertical', 'horizontal', 'none'].includes(value)
  }
})

const selectedTab = ref(null);

if (!selectedTab.value && props.names.length > 0) {
  const selectedTabItem = props.names.find(tab => tab.selected);
  selectedTab.value = selectedTabItem ? selectedTabItem.name : props.names[0].name;
}

const names = ref([...props.names]);

function clickOnTab(tab) {
  props.names.forEach(el => {
    el.selected = false
  });

  tab.selected = true
  selectedTab.value = tab.name
}

// Наблюдатель за изменением массива tabs, рекурсивно чтобы найти вложенный елемент
watch(names, () => {
  selectedTab.value = props.names.find(tab => tab.selected)?.name;
}, {deep: true});

</script>
<template>
  <div class="smpl-tabs-body" :style="{display: vertical ? 'flex' : 'block'}">
    <div class="smpl-tabs-nav" :style="{flexDirection: vertical ? 'column' : 'row'}">
      <SimpleUiButton
          :buttonText="tab.label"
          color="basic"
          v-for="tab in names"
          :key="tab.names"
          :disabled="tab.disabled"
          :class="['smpl-tabs-nav__item', {'smpl-tabs-selected': tab.selected}]"
          @click="clickOnTab(tab)">
        <slot :name="`${tab.name}-icon`"></slot>
      </SimpleUiButton>
    </div>
    <div class="smpl-tabs-content">
      <Transition :name="animation" mode="out-in">
        <div :key="selectedTab">
          <slot :name="selectedTab"></slot>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.smpl-tabs-body {
  width: 100%;
}

.smpl-tabs-nav {
  display: flex;
  align-items: center;
  padding-bottom: 5px;

  &__item {
    border: 1px solid transparent;
    background: var(--smpl-ui-minimal-dark);
    color: #fff;

    &.smpl-tabs-selected {
      background: var(--smpl-ui-primary);
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

.smpl-tabs-content {
  position: relative;
  overflow: hidden; /* Ключевое свойство - блокирует горизонтальный скролл */
  padding: 16px;
  min-height: 60px;
  border-radius: 7px;
  background: var(--smpl-ui-minimal-dark);
  margin: 5px;
  width: 100%;
  line-height: 1.5;
}

.smpl-tabs-content-inner {
  width: 100%;
}

/* fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/*Slide vertical анимация*/
.vertical-enter-active,
.vertical-leave-active {
  transition: all 0.2s ease;
}
.vertical-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
.vertical-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/*Slide horizontal анимация*/
.horizontal-enter-active,
.horizontal-leave-active {
  transition: all 0.2s ease;
}

.horizontal-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

.horizontal-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

/*Slide  анимация*/
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
  position: absolute;
  width: 100%;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-to {
  transform: translateX(0);
}

.slide-leave-from {
  transform: translateX(0);
}

/*zoom  анимация*/
.zoom-enter-active,
.zoom-leave-active {
  transition: all 0.3s ease;
}

.zoom-enter-from {
  transform: scale(0.95);
  opacity: 0;
}

.zoom-leave-to {
  transform: scale(1.05);
  opacity: 0;
}

/*  Fold анимация */
.fold-enter-active,
.fold-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: absolute;
  width: 100%;
  transform-origin: top center;
}

.fold-enter-from {
  transform: perspective(1000px) rotateX(-90deg);
  opacity: 0;
}

.fold-leave-to {
  transform: perspective(1000px) rotateX(90deg);
  opacity: 0;
}

</style>