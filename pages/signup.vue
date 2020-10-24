<template>
  <div>
    <div class="container">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          id="exampleInputEmail1"
          v-model="formUsername"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          id="exampleInputPassword1"
          v-model="formPassword"
          type="password"
          class="form-control"
        />
      </div>
      <div class="form-group form-check">
        <input id="exampleCheck1" type="checkbox" class="form-check-input" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        @click.prevent="signupClick"
      >
        Sign up
      </button>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data() {
    return {
      formUsername: '',
      formPassword: '',
    }
  },
  mounted() {
    // this.checkLogin()

    // eslint-disable-next-line
    console.log(firebase.auth().currentUser)
  },
  methods: {
    checkLogin() {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
        }
      })
    },
    async signupClick() {
      try {
        await this.$store.dispatch('signup', {
          username: this.formUsername,
          password: this.formPassword,
        })
        this.formUsername = ''
        this.formPassword = ''
      } catch (e) {
        // this.formError = e.message
      }
    },
  },
}
</script>
