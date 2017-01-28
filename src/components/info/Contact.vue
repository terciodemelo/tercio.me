<template>
  <div id="contact">
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
import InfoPiece from './InfoPiece'

export default {
  name: 'contact',
  components: {
    InfoPiece
  }
}
</script>

<style scoped>
</style>
