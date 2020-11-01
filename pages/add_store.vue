<template>
  <div class="">
    <div class="form-group">
      <label for="exampleInputEmail1">Store Name</label>
      <input
        id="exampleInputEmail1"
        v-model="data.storeName"
        type="text"
        class="form-control"
        aria-describedby="emailHelp"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Province</label>
      <input
        id="exampleInputPassword1"
        v-model="data.province"
        type="text"
        class="form-control"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click="saveStore">
      Submit
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
        storeName: '',
        province: '',
      },
    }
  },
  methods: {
    async saveStore() {
      await firebase
        .firestore()
        .collection('store')
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

<style></style>
