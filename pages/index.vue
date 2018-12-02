<template>
    <div>
        <PageHeader></PageHeader>
        <p>This is the front page.</p>
    </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'

export default {
    asyncData (context) {
        // called every time before loading the component
        // as the name said, it can be async
        // Also, the returned object will be merged with your data object
        return { name: 'FrontPage' }
    },
    components: {
        PageHeader
    }
    // fetch () {
    //   // The `fetch` method is used to fill the store before rendering the page
    // },
    // head () {
    //   // Set Meta Tags for this Page
    // }
}
</script>

<style lang="scss">
    @import './assets/scss/main.scss';
</style>
