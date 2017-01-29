<template>
  <div id="pages">
    <info-box :title="'PAGES'">
      <div class="menu">
        <ul class="menu-list">
          <li><a href="">Blog</a></li>
          <li><a href="">Resumé / CV</a></li>
        </ul>
      </div>
    </info-box>
  </div>
</template>

<script>
import InfoBox from './InfoBox'

export default {
  name: 'pages',
  components: {
    InfoBox
  }
}
</script>

<style scoped>
.panel-block {
  border: none !important;
}

ul.menu-list {
  padding-left: 4px;
}
</style>
