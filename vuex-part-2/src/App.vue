<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    'nav-bar': Navbar
  },
  mounted() {
    this.$store.commit('setItems')
  }
}
</script>
