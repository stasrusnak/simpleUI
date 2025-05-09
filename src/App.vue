<script setup>
import MainHeader from "@/components/layout/Header.vue";
import SideBar from "@/components/layout/SideBar.vue";
import Docs from "@/components/layout/Docs.vue";
import {ref} from "vue";

const openSidebar = ref(true);

const toggleSidebar = () => {
  openSidebar.value = !openSidebar.value;
};
</script>

<template>
  <div class="container">
    <main-header/>
    <div
        class="sidebar-toggle"
        @click="toggleSidebar"
        :class="{ '_circle': !openSidebar }"
    >
      <div class="vertical-text" v-if="openSidebar">МЕНЮ &nbsp;☰</div>
      <div v-else class="menu-button">☰</div>
    </div>
    <side-bar :openSidebar="openSidebar"/>

    <div :class="['content', { 'content_full': !openSidebar }]">
      <div class="column-wrapper">
        <div class="router-wrapper">
          <router-view/>
        </div>
        <docs class="docs-wrapper"/>
      </div>
    </div>

  </div>

</template>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.column-wrapper {
  display: flex ;
  flex-wrap: nowrap;
  flex-direction: row;
  gap: 20px;
}
.docs-wrapper{
  display: block;
  position: sticky;
}

.content {
  //max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: margin-left 0.5s ease-in-out;

  &_full {
    margin-left: 0;
  }
}

.vertical-text {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  transform: rotate(270deg);
  margin-left: 6px;
  transition: opacity 0.3s ease-in-out;
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  font-size: 19px;
  width: 20px;
  background: var(--smpl-ui-primary);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;

  &._circle {
    width: 44px;
    height: 44px;
    clip-path: circle(100% at 0% 0);
    background: var(--smpl-ui-primary);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .menu-button {
    padding-bottom: 5px;
    padding-right: 5px;
    transition: transform 0.3s ease-in-out;
  }

  &:hover .menu-button {
    transform: scale(1.2);
  }
}
</style>