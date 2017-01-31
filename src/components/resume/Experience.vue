<template>
  <div class="experience">
    <p class="exp-title">{{ title }}</p>
    <p class="exp-company">{{ company }}</p>

    <p class="exp-period-where">
      <span class="exp-period">{{ period }}</span>
      •
      <span class="exp-where">{{ where }}</span>
    </p>

    <p class="exp-description">{{ description }}</p>
    <p class="exp-technologies">
      <u>Technologies;</u> 
      <span v-for="tech in technologies"> {{ tech }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'experience',
  props: [
    'title', 'company', 'where', 'period', 'description', 'technologies'
  ],
  computed: {
    techs () {
      return this.technologies.join(',')
    }
  }
}
</script>

<style scoped>
.experience {
  text-align: left;
}

.exp-title {
  font-family: serif;
  font-style: italic;
  font-size: larger;
  margin-bottom: 5px !important;
}

.exp-company, 
.exp-period, 
.exp-where,
.exp-period-where {
  font-size: small;
  color: grey;
  margin-top: 0 !important;
}

.exp-description {
  color: #555;
  text-align: justify;
}

.exp-technologies {
  font-size: small;
  color: grey;
}

.exp-technologies > span:not(:last-child):after {
  content: ',';
}

</style>
