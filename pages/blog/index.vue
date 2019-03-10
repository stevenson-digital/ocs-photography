<template>
  <div>
    <PageHeader></PageHeader>
    <p>Testing pulling posts:</p>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <nuxt-link :to="`/blog/${post.slug}`">{{ post.title.rendered }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { wpBaseURL } from '../../middleware/variables.js'
import PageHeader from '../../components/PageHeader.vue'

export default {
  name: 'Blog',
  // MAKE ASYNC DATA AND RETURN JS OBJECT OF POSTS
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
  },
  components: {
    PageHeader
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
