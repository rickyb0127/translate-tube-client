<template>
  <NavBar />
  <div class="content-container">
    <DrawerMenu />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import DrawerMenu from './components/DrawerMenu.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    DrawerMenu
  }
}
</script>

<style scoped>
.content-container {
  display: flex;
  padding-top: 60px;
}
</style>
