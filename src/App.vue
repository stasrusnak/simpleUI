<script setup>
import MainHeader from "@/components/layout/Header.vue";
import SideBar from "@/components/layout/SideBar.vue";
import Docs from "@/components/layout/Docs.vue";
import Pagination from "@/components/layout/Pagination.vue";
import { ref } from "vue";

const openSidebar = ref(true);

const toggleSidebar = () => {
  openSidebar.value = !openSidebar.value;
};
</script>

<template>
  <div class="app-layout">
    <MainHeader />

    <button
        class="sidebar-toggle"
        @click="toggleSidebar"
        :class="{ 'sidebar-toggle--collapsed': !openSidebar }"
        aria-label="Toggle sidebar"
    >
      <span class="sidebar-toggle__text" v-if="openSidebar">МЕНЮ ☰</span>
      <span v-else class="sidebar-toggle__icon">☰</span>
    </button>

    <SideBar :openSidebar="openSidebar" />

    <main class="main-content" :class="{ 'main-content--full': !openSidebar }">
      <div class="two-column-layout">
        <div class="two-column-layout__primary">
          <router-view />
        </div>
        <div class="two-column-layout__sidebar">
          <docs class="docs-content" />
          <pagination class="docs-pagination" />
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.app-layout {
  position: relative;
}

.two-column-layout {
  display: flex;
  gap: 20px;
  position: relative;
  &__primary {
    flex: 50%;
  }
  &__sidebar {
    flex: 50%;
    display: flex;
    flex-direction: column;
    height: calc(100vh - var(--smpl-pagination-height) - var(--smpl-header-height));
    position: sticky;
    top: calc(var(--smpl-header-height) + 30px);
    will-change: transform;
  }
}

.docs-content {
  flex: 1;
  overflow-y: auto;
}
.docs-pagination {
  height: var(--smpl-pagination-height);
}

.main-content {
  margin-left: 250px;
  padding: 30px;
  transition: margin-left 0.5s ease-in-out;

  &--full {
    margin-left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  top: 62px;
  width: 22px;
  font-size: 20px;
  height: 100%;
  background: var(--smpl-ui-primary);
  color: #fff;
  border: none;
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  padding: 0;
  margin: 0;

  &--collapsed {
    width: 44px;
    height: 44px;
    clip-path: circle(100% at 0% 0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &__text {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    transform: rotate(270deg);
    margin: 0 6px;
    opacity: 1;
    animation: fadeInMenuText 0.7s forwards;
  }

  &__icon {
    display: block;
    padding-bottom: 5px;
    padding-right: 5px;
    transition: transform 0.3s ease-in-out;
  }

  &:hover &__icon {
    transform: scale(1.2);
  }
}

@keyframes fadeInMenuText {
  from { opacity: 0; }
  to { opacity: 1; }
}


</style>