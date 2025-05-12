<script setup>
import packageJson from '../../../package.json';
import {onMounted, ref} from "vue";

const version  = ref()
const date= ref()


onMounted(() => {
  version.value = packageJson.version;
  date.value =  packageJson.buildDate;
})

</script>


<template>
  <header class="header">
    <router-link to="/">Simple</router-link>
    <img class="logo" src="@/assets/logo.svg" alt="" @click="$router.push('/')">
    <router-link to="/">Kit</router-link>
    <div class="version">
      <div>Date:  <p>{{ date }}</p></div>
      <div>Build Ver:  <p>{{ version }}</p></div>
    </div>
  </header>
</template>



<style lang="scss" scoped>
.version{
  position: fixed;
  right: 0;
  font-size: 15px;
  p{
    display: inline-block;
    color: var(--smpl-ui-success);
  }

}
.header {
  background: rgba(22, 27, 45, 1);
  font-weight: bold;
  padding: 0 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  height: var(--smpl-header-height);
  display: flex;
  align-items: center;
  z-index: 999;
  position: sticky;
  top: 0;
  font-size: 25px;
  a, .version{
    color: #F73164;
  }
}

.logo {
  height: 32px;
  width: 32px;
  cursor: pointer;
}
</style>
