<template>
  <div>
    <PageHeader></PageHeader>
    <p>Testing pulling posts:</p>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <nuxt-link :to="`/blog/${post.slug}`">{{ post.title.rendered }}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="'/blog/test-post'">Test Post (404)</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { wpBaseURL } from '../../middleware/variables.js'
import PageHeader from '../../components/PageHeader.vue'

export default {
  name: 'Blog',
  asyncData({ params, error }) {
    const axios = require('axios')

    return axios.get(`${wpBaseURL}wp-json/wp/v2/posts`)
    .then((res) => {
      return { posts: res.data }
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Page not found' })
    })
  },
  components: {
    PageHeader
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
