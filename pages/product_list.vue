<template>
  <div>
    <Nav />

    <h1>Product List</h1>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">View</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.productName">
          <th scope="row">1</th>
          <td>{{ item.productName }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.reads }}</td>
          <td>
            <button
              class="btn btn-danger"
              @click.prevent="deleteClick(item.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
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
    this.gettingData()
  },
  methods: {
    async gettingData() {
      const doc = await firebase.firestore().collection('products')

      doc.onSnapshot(
        (querySnapshot) => {
          if (querySnapshot.empty) {
            // eslint-disable-next-line
            console.log('No matching documents.')
          }
          querySnapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              // eslint-disable-next-line
              //console.log('New data: ', change.doc.data())
              this.items.push({
                id: change.doc.id,
                productName: change.doc.data().productName,
                price: change.doc.data().price,
                reads: change.doc.data().reads,
              })
            }
            if (change.type === 'modified') {
              // eslint-disable-next-line
              console.log('Modified dat: ', change.doc.data())
            }
            if (change.type === 'removed') {
              // eslint-disable-next-line
              //console.log('Removed data: ', change.doc.data())
              const index = this.items.findIndex((i) => i.id === change.doc.id)
              this.$delete(this.items, index)
            }
          })
        },
        (err) => {
          // eslint-disable-next-line
          console.log(`Encountered error: ${err}`)
        }
      )
    },
    async deleteClick(id) {
      await firebase
        .firestore()
        .collection('products')
        .doc(id)
        .delete()
        .then(() => {
          // eslint-disable-next-line
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error("Error deleting document: ", error);
        })
    },
  },
}
</script>

<style></style>
