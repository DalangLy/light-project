<template>
  <div class="container">
    <Nav />
    <h1>Edit Product</h1>

    <div class="form-group">
      <label for="exampleInputEmail1">Product Name</label>
      <input
        id="exampleInputEmail1"
        v-model="data.productName"
        type="text"
        class="form-control"
        aria-describedby="emailHelp"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Price</label>
      <input
        id="exampleInputPassword1"
        v-model="data.price"
        type="number"
        class="form-control"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click="updateClick">
      Update
    </button>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
export default {
  data() {
    return {
      data: {
        productName: '',
        price: '',
      },
    }
  },
  mounted() {
    this.show()
  },
  methods: {
    async show() {
      // eslint-disable-next-line
      //console.log(item.id)
      const doc = await firebase
        .firestore()
        .collection('products')
        .doc(this.$route.params.edit_id)

      doc.onSnapshot(
        (querySnapshot) => {
          if (querySnapshot.empty) {
            // eslint-disable-next-line
            console.log('No matching documents.')
          }
          // eslint-disable-next-line
          console.log(querySnapshot.data())
          this.data = querySnapshot.data()
          // this.updateView()
        },
        (err) => {
          // eslint-disable-next-line
          console.log(`Encountered error: ${err}`)
        }
      )
    },
    async updateClick(id) {
      await firebase
        .firestore()
        .collection('products')
        .doc(this.$route.params.edit_id)
        .update({
          productName: this.data.productName,
          price: this.data.price,
        })
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
