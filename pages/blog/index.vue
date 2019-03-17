<template>
  <div>
    <p>Blog posts pulled from WordPress API:</p>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <nuxt-link :to="`/blog/${post.slug}`"><span v-html="post.title.rendered"></span></nuxt-link>
      </li>
      <li>
        <nuxt-link :to="'/blog/test-post'">Test Post (404)</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  name: 'Blog',
  asyncData({ params, error }) {
    const axios = require('axios')

    return axios.get(`${process.env.wpBaseURL}wp-json/wp/v2/posts`)
    .then((res) => {
      console.log(res.data)
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
