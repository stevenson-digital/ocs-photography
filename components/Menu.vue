<template>
  <nav class="c-Menu" v-bind:class="{'open': this.$store.state.navMenu.navMenuOpen}">
    <ul class="c-Menu__links u-ListBare">
      <li class="c-Menu__link" v-for="link in links">
        <nuxt-link :to="link.endpoint" v-on:click.native="closeMenu">
          {{ link.title }}
          <ul v-if="link.children" class="c-Menu__sub-menu">
            <li v-for="subLink in link.children" class="c-Menu__sub-link">
              <nuxt-link :to="subLink.endpoint" v-on:click.native="closeMenu">{{ subLink.title }}</nuxt-link>
            </li>
          </ul>
        </nuxt-link>
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
            const thisLink = response.data[link]
            const url = thisLink.url
            const endpoint = url.replace(process.env.wpBaseURL, '/')
            const linkObj = {
              id: thisLink.ID,
              endpoint: endpoint,
              title: thisLink.title,
              children: []
            };

            // Determine if link is a parent or child
            if (thisLink.menu_item_parent == 0) {
              // Parent nav link, push to object as normal
              self.links.push(linkObj)

            } else {
              // Child nav link, push to parent link in links object
              for (var i = 0; i < self.links.length; i++) {
                const parentLink = self.links[i]

                if (parentLink.id == thisLink.menu_item_parent) {
                  parentLink.children.push(linkObj)
                }
              }
            }
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
