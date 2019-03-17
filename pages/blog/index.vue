<template>
  <div>
    <p v-html="page.acf.overview"></p>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <nuxt-link :to="`/blog/${post.slug}`"><span v-html="post.title.rendered"></span></nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  name: 'Blog',
  async asyncData({ query, error }) {
    const axios = require('axios')
    let postsRes = await axios.get(`${process.env.wpBaseURL}wp-json/wp/v2/posts`)
    let pageRes = await axios.get(`${process.env.wpBaseURL}wp-json/wp/v2/pages/?slug=blog`)

    return {
      posts: postsRes.data,
      page: pageRes.data[0]
    }
  },
  components: {
    PageHeader
  }
}
</script>
