<script setup>
import {useRouter} from 'vue-router'

const links = useRouter().options.routes.map(route => ({
  name: route.name,
  href: route.path
}));

defineProps({
  openSidebar: {
    type: Boolean,
    required: true,
  },
});

</script>

<template>
  <div class="sidebar" :class="{ 'sidebar_isopen':openSidebar}">
    <router-link
        class="sidebar__link animated"
        v-for="link in links"
        :key="link.name"
        :to="link.href"
    >
      {{ link.name }}
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  //top: 162px;
  height: 100%;
  background: var(--smpl-ui-bg);
  position: fixed;
  width: 240px;
  padding: 25px 0 30px 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transition: transform 1.1s  cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateX(-250px);
  &_isopen {
    transform: translateX(0px);
  }
  &__link {
    display: block;
    border-radius: 12px;
    transition: 0.2s;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 20px;
    padding: 4px 4px 10px 14px;
    &:hover {
      color: var(--smpl-ui-primary);
      transform: translateX(-20px);
    }
  }
}
</style>
