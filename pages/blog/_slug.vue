<template>
  <div>
    <h1 v-html="post.title.rendered"></h1>
    <div class="c-BlogContent">
      <div v-for="block in acf.content">
        <TextBlock v-if="block.acf_fc_layout == 'text_block'" :wysiwygContent="block.text[0].text" />
        <ImageWithCredits v-else-if="block.acf_fc_layout == 'image'" :imageSrc="block.image[0].image.url" :imageAlt="block.image[0].image.alt" :creditName="block.image[0].credit_name" :creditSource="block.image[0].credit_source" />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import TextBlock from '~/components/TextBlock.vue'
import ImageWithCredits from '~/components/ImageWithCredits.vue'

export default {
  name: 'SinglePost',
  async asyncData({ params, error }) {
    const axios = require('axios')

    return axios.get(`${process.env.wpBaseURL}wp-json/wp/v2/posts/?slug=${params.slug}`)
    .then((res) => {
      // WordPress API doesn't return 404 when page doesn't exist
      // It returns 200 with empty 'data' array
      if (res.data.length > 0) {
        console.log(res.data[0])
        const data = res.data[0]

        return {
          post: data,
          pageTitle: data.title.rendered,
          acf: data.acf
        }

      } else {
        error({ statusCode: 404, message: 'Post not found' })
      }
    })
  },
  components: {
    PageHeader,
    TextBlock,
    ImageWithCredits
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
