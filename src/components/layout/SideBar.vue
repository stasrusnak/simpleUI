<script setup>
import {ref} from "vue";

const props = defineProps({
  openSidebar: {
    type: Boolean,
    required: true,
  },
});

const links = ref([
  {name: "Home", href: "/"},
  {name: "Button", href: "/button"},
  {name: "Checkbox", href: "/checkbox"},
  {name: "Radiobutton", href: "/radiobutton"},
  {name: "Progress", href: "/progress"},
  {name: "Input", href: "/input"},
  {name: "Tabs", href: "/tabs"},
  {name: "Table", href: "/table"},
  {name: "Textarea", href: "/textarea"},
]);
</script>

<template>
  <div class="sidebar">
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
  background: #23243E;
  position: fixed;
  width: 250px;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transition: transform 1.1s cubic-bezier(0.1, 0.7, 1, 0.1);
  //transform: translateX(-250px);
  //&_isopen {
  //  transform: translateX(0px);
  //}
  &__link {
    display: block;
    border-radius: 12px;
    transition: 0.2s;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 20px;
    padding: 4px 4px;
    &:hover {
      color: var(--primary);
      transform: translateX(-20px);
    }
  }
}
</style>
