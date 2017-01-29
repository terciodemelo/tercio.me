<template>
  <div id="blog">
    <div class="box">
      Blog
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog'
}
</script>

<style scoped>
#blog {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: left;
}

.box {
  width: 95%;
  margin-left: 15px;
}
</style>
