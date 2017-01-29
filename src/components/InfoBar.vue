<template>
  <div id="info-bar">
    <abstract></abstract>
    <contact></contact>
  </div>
</template>

<script>
import Contact from './info/Contact'
import Abstract from './info/Abstract'

export default {
  name: 'info-bar',
  components: {
    Contact,
    Abstract
  }
}
</script>

<style scoped>
#info-bar {
  margin-left: 30px;
}

#abstract {
  margin-bottom: 15px;
}
</style>
