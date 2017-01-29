<template>
  <div id="profile-pic">
    <img src="../../assets/tercio-profile.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'profile-pic'
}
</script>

<style scoped>
#profile-pic {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  margin-bottom: 50px;
  height: 100px;
  background-color: #444;
}

img {
  position: relative;
  border: 3px solid white;
  border-radius: 100%;
  height: 100px;
}
</style>
