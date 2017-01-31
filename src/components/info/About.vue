<template>
  <div id="about">
    <info-box :title="'About'">
      <p>
        <i class="fa fa-graduation-cap"></i>
        Bachelors of Computer Science from 
        <a href="http://www.ufcg.edu.br/index1.php">UFCG</a>
      </p>
      <p>
        <i class="fa fa-desktop"></i>
        Works at 
        <a href="https://www.lsd.ufcg.edu.br/#/lab/english">LSD</a>
      </p>
      <p>
        <i class="fa fa-map-pin"></i>
        Lives in 
        <a href="https://en.wikipedia.org/wiki/Campina_Grande">
          Campina Grande – PB, Brazil
        </a>
      </p>
    </info-box>
  </div>
</template>

<script>
import InfoBox from './InfoBox'

export default {
  name: 'about',
  components: {
    InfoBox
  }
}
</script>

<style scoped>
#about > .info-box p {
  font-size: small;
}
</style>
