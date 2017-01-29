<template>
  <div id="abstract">
    <div class="box">
      <profile-pic></profile-pic>
      <h3 class="title">Tercio de Melo</h3>
      <p>
        Full-stack/DevOps/SRE Engineer, 
        passionate for programming languages,
        Loremaster of Warcraft,
        and guitar player
      </p>
    </div>
  </div>
</template>

<script>
import ProfilePic from './ProfilePic'
import InfoPiece from './InfoPiece'

export default {
  name: 'abstract',
  components: {
    ProfilePic,
    InfoPiece
  }
}
</script>

<style>
#abstract {
  width: 250px;
}

.box {
  padding: 0 0 10px 0 !important;
}

p {
  margin: 10px 15px 0 15px !important;
}
</style>
