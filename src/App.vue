<template>
  <div id="app">
    <topHeader></topHeader>
    <sideBar></sideBar>
    <router-view></router-view>
    <footer-tem></footer-tem>
  </div>
</template>

<script>
import topHeader from './components/header.vue'
import sideBar from './components/sideBar.vue'
import footerTem from './components/footer.vue'
export default {
  components: {
    topHeader,
    sideBar,
    footerTem
  },
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#app {
  background: #F1F1F1;
}
</style>
