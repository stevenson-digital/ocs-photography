<template>
  <nav class="c-Menu" v-bind:class="{'open': this.$store.state.navMenu.navMenuOpen}">
    <ul class="c-Menu__links u-ListBare">
      <li class="c-Menu__link" v-for="link in links">
        <nuxt-link :to="link.endpoint" v-on:click.native="closeMenu">{{ link.title }}</nuxt-link>
      </li>
    </ul>
    <button class="c-Menu__close" @click="closeMenu">Close</button>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      links: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const axios = require('axios')
      const self = this;

      axios.get(`${process.env.wpBaseURL}wp-json/ocs/menu`)
        .then(function(response) {
          // handle success
          for (let link in response.data) {
            const url = response.data[link].url
            const endpoint = url.replace(process.env.wpBaseURL, '/')
            const linkObj = {
              endpoint: endpoint,
              title: response.data[link].title
            };

            self.links.push(linkObj)
          }
        })
        .catch(function(error) {
          // handle error
          console.log(error)
        })
        .then(function() {
          // always executed
        });
    },
    closeMenu() {
      this.$store.dispatch('navMenu/closeNavMenu')
    }
  }
}
</script>
