<template>
  <div id="info-box">
    <div class="box">
      <h4 class="title is-4">{{ title }}</h4>
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
