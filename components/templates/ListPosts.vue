<template>
    <div>
        <PageHeader></PageHeader>
        <p>Testing pulling posts:</p>
        <ul>
            <li v-for="post in posts">
                <a :href="`/blog/${post.slug}`">{{ post.title.rendered }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { wpBaseURL } from '../../variables.js'

export default {
  name: 'ListPosts',
  data() {
    return {
      posts: []
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const axios = require('axios');
      const self = this;

      axios.get(`${wpBaseURL}wp-json/wp/v2/posts`)
        .then(function(response) {
          // handle success
          for (let post in response.data) {
            // console.log(response.data[post]);
            self.posts.push(response.data[post]);
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
