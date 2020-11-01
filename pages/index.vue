<template>
  <div>
    <Nav />

    <ul>
      <li v-for="item in items" :key="item.storeName">{{ item.storeName }}</li>
    </ul>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
export default {
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('SET_AUTH', true)
      } else {
        this.$store.commit('SET_AUTH', false)
      }
    })

    this.gettingData()
  },
  methods: {
    async gettingData() {
      const citiesRef = firebase.firestore().collection('store')
      const snapshot = await citiesRef.get()
      if (snapshot.empty) {
        // eslint-disable-next-line
        console.log('No matching documents.')
        return
      }

      snapshot.forEach((doc) => {
        this.items.push(doc.data())
      })
    },
  },
}
</script>
