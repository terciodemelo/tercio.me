<template>
  <div id="contact">
      <info-box :title="'Contact'">
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
      </info-box>
  </div>
</template>

<script>
import InfoPiece from './InfoPiece'
import InfoBox from './InfoBox'

export default {
  name: 'contact',
  components: {
    InfoPiece,
    InfoBox
  }
}
</script>

<style scoped>
</style>
