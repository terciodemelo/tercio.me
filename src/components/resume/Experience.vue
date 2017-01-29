<template>
  <div id="experience">
    <p>{{ title }}</p>
    <p>{{ where }}</p>
    <p>{{ period }}</p>
    <p>{{ description }}</p>
    <p>{{ technologies }}</p>
  </div>
</template>

<script>
export default {
  name: 'experience',
  props: ['title', 'where', 'period', 'description', 'technologies']
}
</script>

<style scoped>
</style>
