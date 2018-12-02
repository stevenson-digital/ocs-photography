<template>
    <header>
        <NavBar></NavBar>
    </header>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
    name: 'PageHeader',
    data() {
        return {
          // links: {}
        }
    },
    created() {},
    components: {
        NavBar
    }
}
</script>
