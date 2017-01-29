<template>
  <div id="info-piece">
    <p>
      <span class="icon">
        <i class="fa" :class="iconClass"></i>
      </span>
      <a v-if="link" :href="link">
        {{ content }}
      </a>
      <span v-else>
        {{ content }}
      </span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'info-piece',
    props: ['title', 'link', 'content'],
    computed: {
      iconClass () {
        return {
          Twitter: 'fa-twitter',
          GitHub: 'fa-github',
          LinkedIn: 'fa-linkedin-square',
          email: 'fa-envelope-o'
        }[this.title]
      }
    }
  }
</script>

<style scoped>
</style>
