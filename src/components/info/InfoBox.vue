<template>
  <div id="info-box">
    <div class="box">
      <p class="menu-label title is-6">{{ title }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info-box',
  props: ['title']
}
</script>

<style scoped>
#info-box {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.box {
  padding: 15px 15px 15px 10px !important;
}

h4 {
  text-align: center;
  margin-bottom: 10px !important;
}
</style>
