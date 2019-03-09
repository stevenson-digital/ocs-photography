<template>
  <button class="c-MenuBtn" @click="openMenu">
    <p class="c-MenuBtn__text">Menu</p>
    <div class="c-MenuBtn__icon"></div>
  </button>
</template>

<script>
export default {
  name: 'MenuBtn',
  methods: {
    openMenu() {
      this.$store.dispatch('navMenu/openNavMenu')
      console.log(this.$store.state.navMenu.navMenuOpen)
    }
  }
}
</script>
