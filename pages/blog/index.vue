<template>
  <div :style="{backgroundColor: acf.background_color}">
    <img :src="acf.header_image.url" :alt="acf.header_image.alt">
    <p v-html="acf.overview" :style="{color: fontColor}"></p>
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
    const fontColor = (pageRes.data[0].acf.font_color == 'white') ? '#fff' : (pageRes.data[0].acf.font_color == 'black') ? '#1b1b1b' : pageRes.data[0].acf.custom_font_color

    // console.log(pageRes.data[0])

    return {
      posts: postsRes.data,
      pageTitle: pageRes.data[0].title.rendered,
      acf: pageRes.data[0].acf,
      fontColor: fontColor
    }
  },
  components: {
    PageHeader
  },
  head () {
    return {
      title: this.pageTitle + ' | ' + this.acf.meta_description,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.acf.meta_description }
      ]
    }
  }
}
</script>
