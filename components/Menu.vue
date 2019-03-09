<template>
  <nav class="c-Menu" v-bind:class="{'open': this.$store.state.navMenu.navMenuOpen}">
    <ul class="c-Menu__links u-ListBare">
      <li class="c-Menu__link" v-for="link in links">
        <nuxt-link :to="link.endpoint">{{ link.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { wpBaseURL } from '../middleware/variables.js'

export default {
  name: 'Menu',
  data() {
    return {
      links: []
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const axios = require('axios');
      const self = this;

      axios.get(`${wpBaseURL}wp-json/ocs/menu`)
        .then(function(response) {
          // handle success
          for (let link in response.data) {
            const url = response.data[link].url;
            const endpoint = url.replace(wpBaseURL, '/');
            const linkObj = {
              endpoint: endpoint,
              title: response.data[link].title
            };

            self.links.push(linkObj);
          }
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    }
  }
}
</script>
