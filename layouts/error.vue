<template>
  <div class="nuxt-error">
    <h1>{{ this.error.statusCode }}</h1>
    <p>{{ errorMsg }}</p>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'default', // optional
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    errorMsg() {
      if (this.error.statusCode === 404) {
        return 'The page you are looking for could not be found.'
      }
      // catch everything else
      return 'There was an internal server error, please try again.'
    }
  }
}
</script>
