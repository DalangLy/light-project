<template>
  <div>
    <Nav />
    <nuxt-link to="/" class="btn btn-primary">Back</nuxt-link>
    <h1>Product Name : {{ item.productName }}</h1>
    <h1>Price : {{ item.price }}$</h1>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
export default {
  data() {
    return {
      item: {},
    }
  },
  mounted() {
    this.show()
    this.updateView()
  },
  methods: {
    async show() {
      // eslint-disable-next-line
      //console.log(item.id)
      const doc = await firebase
        .firestore()
        .collection('products')
        .doc(this.$route.params.pid)

      doc.onSnapshot(
        (querySnapshot) => {
          if (querySnapshot.empty) {
            // eslint-disable-next-line
            console.log('No matching documents.')
          }
          // eslint-disable-next-line
          console.log(querySnapshot.data())
          this.item = querySnapshot.data()
          // this.updateView()
        },
        (err) => {
          // eslint-disable-next-line
          console.log(`Encountered error: ${err}`)
        }
      )
    },
    async updateView() {
      const db = await firebase.firestore()
      const increment = firebase.firestore.FieldValue.increment(1)

      // Document reference
      const storyRef = db.collection('products').doc(this.$route.params.pid)

      // Update read count
      storyRef
        .update({ reads: increment })
        .then(() => {
          // eslint-disable-next-line
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error("Error updating document: ", error);
        })
    },
  },
}
</script>

<style></style>
