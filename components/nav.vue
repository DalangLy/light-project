<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Index</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li v-if="$store.getters.isAuth" class="nav-item">
            <span class="nav-link" style="cursor: pointer" @click="signout"
              >Logout</span
            >
          </li>
          <li v-if="$store.getters.isAuth" class="nav-item">
            <nuxt-link class="nav-link" to="/add_store">Add Store</nuxt-link>
          </li>
          <li v-if="$store.getters.isAuth" class="nav-item">
            <nuxt-link class="nav-link" to="/add_product"
              >Add Product</nuxt-link
            >
          </li>
          <li v-if="!$store.getters.isAuth" class="nav-item">
            <nuxt-link class="nav-link" to="/signup">Signup</nuxt-link>
          </li>
          <li v-if="!$store.getters.isAuth" class="nav-item">
            <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  methods: {
    signout() {
      firebase.auth().signOut()
    },
  },
}
</script>

<style></style>
