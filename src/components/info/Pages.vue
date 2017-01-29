<template>
  <div id="pages">
    <info-box :title="'PAGES'">
      <div class="menu">
        <ul class="menu-list">
          <li>
            <router-link to="/">
              <i class="fa fa-angle-right"></i>
              Blog
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="fa fa-angle-right"></i>
              Resumé / CV
            </router-link>
          </li>
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
:not(.current) > .fa-angle-right {
  display: none;
}

.panel-block {
  border: none !important;
}

ul.menu-list {
  padding-left: 4px;
}

ul.menu-list .is-active {
  color: white !important;
  background-color: #3498db;
}
</style>
