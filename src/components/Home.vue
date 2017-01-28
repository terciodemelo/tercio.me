<template>
  <div class="home">
    <profile-pic></profile-pic>

    <info-piece :title="'Tercio de Melo'"></info-piece>

    <info-piece :title="'terciodemelo@gmail.com'"></info-piece>

    <info-piece :title="'Twitter'"
                :link="'https://twitter.com/terciodemelo'"
                :content="'@terciodemelo'"></info-piece>
              
    <info-piece :title="'Github'"
                :link="'https://github.com/terciodemelo'"
                :content="'terciodemelo'"></info-piece>

    <info-piece :title="'LinkedIn'"
                :link="'https://www.linkedin.com/in/tercio-de-melo-0b714010a/'"
                :content="'Tercio de Melo'"></info-piece>

  </div>
</template>

<script>
  import ProfilePic from './info/ProfilePic'
  import InfoPiece from './info/InfoPiece'

  export default {
    name: 'home',
    components: {
      ProfilePic,
      InfoPiece
    }
  }
</script>

<style scoped>

</style>
