import * as firebase from 'firebase/app'
import 'firebase/auth'

export const state = () => ({
  authUser: null,
})

export const mutations = {
  SET_USER(state, user) {
    // eslint-disable-next-line
      console.info(user)
    state.authUser = user
  },
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async signup({ commit }, { username, password }) {
    try {
      const data = await firebase
        .auth()
        .createUserWithEmailAndPassword(username, password)

      const user = await data.user.getIdToken()

      commit('SET_USER', user)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async login({ commit }, { username, password }) {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          // eslint-disable-next-line
        console.log(user)
        })
    } catch (error) {}
  },
  async signout() {
    try {
      await firebase
        .auth()
        .signOut()
        .then(function () {
          // Sign-out successful.
        })
    } catch (err) {}
  },
}
