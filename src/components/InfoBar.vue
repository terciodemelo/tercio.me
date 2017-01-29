<template>
  <div id="info-bar">
    <abstract></abstract>
    <pages></pages>
    <contact></contact>
    <about></about>
  </div>
</template>

<script>
import Contact from './info/Contact'
import Abstract from './info/Abstract'
import About from './info/About'
import Pages from './info/Pages'

export default {
  name: 'info-bar',
  components: {
    Contact,
    Abstract,
    About,
    Pages
  }
}
</script>

<style scoped>
#info-bar {
  margin-left: 30px;
}

#info-bar > div {
  margin-bottom: 15px;
}
</style>
