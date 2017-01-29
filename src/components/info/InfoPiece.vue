<template>
  <div id="info-piece">
    <p>
      <span v-if="title">{{ title }}</span>
      <a v-if="link" :href="link">
        {{ content }}
      </a>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'info-piece',
    props: ['title', 'link', 'content']
  }
</script>

<style scoped>
</style>
