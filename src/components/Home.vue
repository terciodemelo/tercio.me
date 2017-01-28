<template>
  <div class="home">
    <profile-pic></profile-pic>
    <p>Tercio de Melo</p>
    <p>email: terciodemelo@gmail.com</p>

    <p>Twitter:
      <a href="https://twitter.com/terciodemelo">
        @terciodemelo
      </a>
    </p>

    <p>GitHub: 
      <a href="https://github.com/terciodemelo">
        terciodemelo
      </a>
    </p>

    <p>LinkedIn:
      <a href="https://www.linkedin.com/in/tercio-de-melo-0b714010a/">
        Tercio de Melo
      </a>
    </p>
  </div>
</template>

<script>
  import ProfilePic from './info/ProfilePic'

  export default {
    name: 'home',
    components: {
      ProfilePic
    }
  }
</script>

<style scoped>

</style>
