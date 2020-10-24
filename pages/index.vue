<template>
  <div>
    <h1>Index</h1>

    <nuxt-link to="/login">Login</nuxt-link>

    <button @click="signout">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    async signout() {
      try {
        await this.$store.dispatch('signout')
      } catch (e) {
        // this.formError = e.message
      }
    },
  },
}
</script>

<style></style>
