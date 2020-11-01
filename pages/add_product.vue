<template>
  <div class="container">
    <Nav />
    <h1>Add Product</h1>

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
    <button type="submit" class="btn btn-primary" @click="saveStore">
      Add
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
  methods: {
    async saveStore() {
      await firebase
        .firestore()
        .collection('products')
        .doc()
        .set(this.data)
        .then((response) => {
          // eslint-disable-next-line
        console.log(response)
        })
    },
  },
}
</script>
