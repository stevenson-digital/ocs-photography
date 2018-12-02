<template>
    <div>
        <PageHeader></PageHeader>
        <h1>{{ post.title.rendered }}</h1>
        <div v-html="post.content.rendered"></div>
    </div>
</template>

<script>
import { wpBaseURL } from '../../variables.js'

export default {
  name: 'SinglePost',
  data() {
    return {
      post: {}
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const axios = require('axios');
      const self = this;
      const postSlug = this.$route.params.post_slug;

      axios.get(`${wpBaseURL}wp-json/wp/v2/posts/?slug=${postSlug}`)
        .then(function(response) {
          // handle success
          for (let post in response.data) {
            self.post = response.data[post];
          }
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  padding-left: 20px;
}

a {
  color: #42b983;
}
</style>
