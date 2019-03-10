<template>
  <div>
    <PageHeader></PageHeader>
    <h1>{{ post.title.rendered }}</h1>
    <div v-html="post.content.rendered"></div>
  </div>
</template>

<script>
import { wpBaseURL } from '../../middleware/variables.js'
import PageHeader from '../../components/PageHeader.vue'

export default {
  name: 'SinglePost',
  async asyncData({ params, error }) {
    const axios = require('axios')

    return axios.get(`${wpBaseURL}wp-json/wp/v2/posts/?slug=${params.slug}`)
    .then((res) => {
      // WordPress API doesn't return 404 when page doesn't exist
      // It returns 200 with empty 'data' array
      if (res.data.length > 0) {
        return { post: res.data[0] }

      } else {
        error({ statusCode: 404, message: 'Post not found' })
      }
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Post not found' })
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
