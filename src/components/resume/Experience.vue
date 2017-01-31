<template>
  <div class="experience">
    <p class="exp-title">{{ title }}</p>
    <p class="exp-company">
      <a v-if="company_url" :href="company_url">{{ company }}</a>
      <span v-else>{{company}}</span>
    </p>

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
    'title', 'company', 'company_url', 'where', 'period',
    'description', 'technologies'
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
  margin-bottom: 0px !important;
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
}

.exp-technologies {
  font-size: small;
  color: grey;
}

.exp-technologies > span:not(:last-child):after {
  content: ',';
}

</style>
