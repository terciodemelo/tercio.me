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
  padding-top: 100px;
  margin-bottom: 50px;
  height: 150px;
  background-color: #2980b9;
  background-image: url("../../assets/profile-bg-1.jpg");
  border-radius: 5px 5px 0px 0px;
  box-shadow: inherit;
}

img {
  position: relative;
  border: 3px solid white;
  border-radius: 100%;
  height: 100px;
}
</style>
