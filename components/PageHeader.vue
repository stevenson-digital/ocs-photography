<template>
  <div>
    <Menu></Menu>
    <header>
      <MenuBtn></MenuBtn>
    </header>
  </div>
</template>

<script>
import Menu from './Menu.vue'
import MenuBtn from './MenuBtn.vue'

export default {
  name: 'PageHeader',
  data() {
    return {
      // links: {}
    }
  },
  // created() {},
  components: {
    Menu,
    MenuBtn
  }
}
</script>
