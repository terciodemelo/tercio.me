<template>
  <div id="abstract">
    <profile-pic></profile-pic>
    <info-piece :title="'Tercio de Melo'"></info-piece>
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
</style>
