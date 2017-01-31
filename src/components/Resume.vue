<template>
  <div id="resume">
    <div class="box">
      <experience v-for="experience in experiences" 
                  :title="experience.title"
                  :company="experience.company"
                  :where="experience.where"
                  :period="experience.period"
                  :description="experience.description"
                  :technologies="experience.technologies">
      </experience>
    </div>
  </div>
</template>

<script>
import Experience from './resume/Experience'

export default {
  name: 'resume',
  components: {
    Experience
  },
  data () {
    return {
      experiences: [
        {
          title: 'Full-Stack developer and Cloud Computing Engineer',
          company: 'Distributed Systems Laboratory - UFCG',
          where: 'Campina Grande – PB, Brazil',
          period: 'Aug 2016 – Present',
          description: `
            Technical leader, in charge of integration between Lenovo LXCA
            and RedHat ManageIQ; also responsible for the development of a
            ruby client for LXCA`,
          technologies: [
            'Ruby on Rails', 'Docker', 'Postgres', 'MongoDB', 'ManageIQ',
            'LXCA', 'Angular 2'
          ]
        },
        {
          title: 'Full-Stack developer and DevOps',
          company: 'Freelancer',
          where: 'Campina Grande – PB, Brazil',
          period: 'Jul 2016 – Dec 2016',
          description: `
            Responsible for development and maintenance of web services
            and SaaS projects, including containerization and building
            continous deintegration and deployment pipelines`,
          technologies: [
            'Java', 'Jersey', 'Ruby', 'Ruby on Rails', 'Docker', 'Jenkins'
          ]
        },
        {
          title: 'Back-end Software Developer Intern',
          company: 'TFG Co',
          where: 'São Paulo – SP, Brazil',
          period: 'Feb 2015 – Jun 2016',
          description: `
            Responsible for building and enhancement of SaaS and web
            services with heavy traffic requirements; also configuring
            infrastructure to serve them with configuration managers in
            HA environments with Kubernetes. Also responsible for
            developing dev tools such as web scrapers, scripts, data
            reporting and networking security mobile libraries, among
            others`,
          technologies: [
            'Ruby', 'Ruby on Rails', 'Sinatra', 'Node.js', 'Python',
            'Scala', 'Play! Framework', 'Java', 'Objective-C', 'Postgres',
            'SQLite', 'DynamoDB', 'MongoDB', 'Redis', 'Kafka', 'Zookeeper',
            'Chef', 'Ansible', 'Docker', 'Kubernetes', 'Sensu', 'EC2',
            'DigitalOcean', 'OpsWorks'
          ]
        },
        {
          title: 'Software Developer',
          company: 'SPLab',
          where: 'Campina Grande – PB, Brazil',
          period: 'Feb 2014 – Dec 2014',
          description: `
            Responsible for building embedded systems for Ingenico
            terminals, Android applications, and dev tools`,
          technologies: [
            'C', 'C++', 'Java', 'Android', 'Python'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
#resume {
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

.experience {
  margin-bottom: 50px;
}
</style>
