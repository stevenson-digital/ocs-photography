<template>
  <div>
    <PageHeader></PageHeader>
    <p>This is the front page.</p>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  asyncData (context) {
    return { name: 'FrontPage' }
  },
  components: {
    PageHeader
  }
}
</script>

<style lang="scss">
    @import './assets/scss/main.scss';
</style>
