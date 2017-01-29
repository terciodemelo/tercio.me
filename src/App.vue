<template>
  <div id="app">
    <info-bar></info-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import InfoBar from './components/InfoBar'

export default {
  name: 'app',
  components: {
    InfoBar
  }
}
</script>

<style scoped>
#app {
  width: 100%;
  display: flex;
  justify-content: center;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a:hover:not(.button):not(.panel-block) {
  color: black !important;
}

a:not(.button):not(.panel-block) {
  color: #3498db !important;
}
</style>
