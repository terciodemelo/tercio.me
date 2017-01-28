<template>
  <div id="info-bar">
    <profile-pic></profile-pic>
    <info-piece :title="'Tercio de Melo'"></info-piece>
    <contact></contact>
  </div>
</template>

<script>
import ProfilePic from './info/ProfilePic'
import InfoPiece from './info/InfoPiece'
import Contact from './info/Contact'

export default {
  name: 'info-bar',
  components: {
    ProfilePic,
    InfoPiece,
    Contact
  }
}
</script>

<style scoped>
#info-bar {
  margin-left: 30px;
}
</style>
