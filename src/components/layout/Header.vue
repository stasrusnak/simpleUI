<template>
  <header class="header">
    <router-link to="/">Simple</router-link>
    <img class="logo" src="@/assets/logo.svg" alt="" @click="$router.push('/')">
    <router-link to="/">Kit</router-link>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: rgba(22, 27, 45, 0.95);
  font-weight: bold;
  padding: 0 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  height: 62px;
  display: flex;
  align-items: center;
  z-index: 1;
  position: relative;
  color: #F73164;
  font-size: 25px;
}

.logo {
  height: 32px;
  width: 32px;
}
</style>

