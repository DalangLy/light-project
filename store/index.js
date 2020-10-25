// import * as firebase from 'firebase/app'
// import 'firebase/auth'

// export const state = () => ({
//   authUser: null,
//   isLoggedin: false,
// })

// export const mutations = {
//   SET_USER(state, user) {
//     state.authUser = user
//   },
//   SET_LOGIN(state, isLoggedin) {
//     state.isLoggedin = isLoggedin
//   },
// }

// export const getters = {
//   isAuth(state) {
//     return state.isLoggedin
//   },
// }

// export const actions = {
//   // nuxtServerInit is called by Nuxt.js before server-rendering every page
//   nuxtServerInit({ commit }, { req }) {
//     if (req.session && req.session.authUser) {
//       commit('SET_USER', req.session.authUser)
//     }
//   },
//   async signup({ commit }, { username, password }) {
//     try {
//       await firebase.auth().createUserWithEmailAndPassword(username, password)
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         throw new Error('Bad credentials')
//       }
//       throw error
//     }
//   },
//   async login({ commit }, { username, password }) {
//     try {
//       await firebase
//         .auth()
//         .signInWithEmailAndPassword(this.email, this.password)
//     } catch (error) {}
//   },
//   async signout() {
//     try {
//       await firebase.auth().signOut()
//     } catch (err) {}
//   },
//   async checkLogin({ commit }) {
//     try {
//       await firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//           commit('SET_LOGIN', true)
//           this.$router.push('/')
//         } else {
//           commit('SET_LOGIN', false)
//         }
//       })
//     } catch (error) {}
//   },
// }
