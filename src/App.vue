<script setup>
import MainHeader from "@/components/layout/Header.vue";
import SideBar from "@/components/layout/SideBar.vue";
import {ref} from "vue";

const openSidebar = ref(true);

const toggleSidebar = () => {
  openSidebar.value = !openSidebar.value
}

</script>

<template>

<!--  <button-compact></button-compact>-->


  <div class="container">
    <main-header/>
    <div class="sidebar-toggle" @click="toggleSidebar" :class="{ '_circle': !openSidebar }" >
      <div class="vertical-text" v-if="openSidebar">МЕНЮ &nbsp;☰</div>
      <div v-else class="menu-button"> ☰ </div>
    </div>
    <side-bar :openSidebar="openSidebar"/>
    <div :class="!openSidebar ? 'content content_full' : 'content'">
      <router-view/>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@import "@/styles/global.scss";


.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.8s;

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

  &._circle {
    transition: width 0.5s ease-out, height 0.5s ease-out;
    width: 44px;
    height: 44px;
    clip-path: circle(100% at 0% 0);
    .menu-button{
      padding-bottom: 5px;
      padding-right: 5px;
    }
  }
}



//@media screen and (max-width: 1023px) {
//  .content {
//    margin-left: 0;
//  }
//}

</style>
