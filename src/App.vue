<script setup>
import InputTextSimpleUI from '@/components/InputText.vue'
import InputTextareaSimpleUI from '@/components/InputTextarea.vue'
import MainHeader from "@/components/layout/Header.vue";
import SideBar from "@/components/layout/SideBar.vue";
import {ref} from "vue";

const openSidebar = ref(false);

const toggleSidebar = () => {
  openSidebar.value = !openSidebar.value
}

</script>

<template>

  <div class="container">
    <main-header/>
    <div class="sidebar-toggle" @click="toggleSidebar">
      <div class="vertical-text">МЕНЮ &nbsp;☰</div>
    </div>
    <side-bar :openSidebar="openSidebar"/>
    <div :class="!openSidebar ? 'content content_full' : 'content'">
      <router-view/>
    </div>
  </div>

</template>

<style lang="scss">
@import "@/styles/global.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.5s;

  &_full {
    margin-left: 0;
  }
}


.vertical-text {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  transform: rotate(270deg);

}

.sidebar-toggle {
  position: fixed;
  left: 0;
  font-size: 19px;
  width: 20px;
  background: var(--primary);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

//@media screen and (max-width: 1023px) {
//  .content {
//    margin-left: 0;
//  }
//}

</style>
