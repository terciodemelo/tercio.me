<template>
  <div id="contact">
    <div class="box">
      <h4 class="title is-4">Contact</h4>

      <info-piece :title="'email'"
                  :content="'terciodemelo@gmail.com'"></info-piece>

      <info-piece :title="'Twitter'"
                  :link="'https://twitter.com/terciodemelo'"
                  :content="'@terciodemelo'"></info-piece>
                
      <info-piece :title="'GitHub'"
                  :link="'https://github.com/terciodemelo'"
                  :content="'terciodemelo'"></info-piece>

      <info-piece :title="'LinkedIn'"
                  :link="'https://www.linkedin.com/in/tercio-de-melo-0b714010a/'"
                  :content="'Tercio de Melo'"></info-piece>
    </div>
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
#contact {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.box {
  padding: 20px 20px 20px 20px !important;
}

h4 {
  text-align: center;
  margin-bottom: 10px !important;
}
</style>
