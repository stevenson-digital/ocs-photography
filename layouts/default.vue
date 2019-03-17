<template>
  <div>
    <PageHeader></PageHeader>
    <nuxt/>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: {
    PageHeader
  }
}
</script>

<style lang="scss">
    @import './assets/scss/main.scss';
</style>
