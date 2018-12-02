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
    async asyncData({ params }) {
        const axios = require('axios')
        const postSlug = params.slug

        let { data } = await axios.get(`${wpBaseURL}wp-json/wp/v2/posts/?slug=${postSlug}`)
        return { post: data[0] }
    },
    // asyncData ({ params }) {
    //     const axios = require('axios')
    //     const postSlug = params.slug
    //
    //     return axios.get(`${wpBaseURL}wp-json/wp/v2/posts/?slug=${postSlug}`)
    //         .then((res) => {
    //         return { post: res.data[0] }
    //     })
    // },
    created() {},
    methods: {},
    components: {
        PageHeader
    }
}
</script>

<style lang="scss">
    @import './assets/scss/main.scss';
</style>
