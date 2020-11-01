<template>
  <div class="index-background">
    <Nav />

    <div class="light-product-container">
      <nuxt-link
        v-for="item in items"
        :key="item.productName"
        :to="item.id"
        class="light-card"
      >
        <div class="light-image">
          <img
            src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
            alt=""
          />
        </div>
        <div class="light-content">
          <h6>{{ item.productName }}</h6>
          <p>{{ item.price }}$</p>
        </div>
      </nuxt-link>
    </div>
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
              })
            }
            if (change.type === 'modified') {
              // eslint-disable-next-line
              console.log('Modified dat: ', change.doc.data())
            }
            if (change.type === 'removed') {
              // eslint-disable-next-line
              console.log('Removed data: ', change.doc.data())
            }
          })
        },
        (err) => {
          // eslint-disable-next-line
          console.log(`Encountered error: ${err}`)
        }
      )
    },
  },
}
</script>

<style lang="scss">
.light-product-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px;
  .light-card {
    flex-grow: 1;
    cursor: pointer;
    max-width: 200px;
    height: 300px;
    border: 1px solid lightgray;
    border-radius: 5px;
    transition: 0.3s ease;
    overflow: hidden;
    text-decoration: none;
    color: black;
    .light-image {
      width: 100%;
      height: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .light-content {
      width: 100%;
      height: 50%;
      overflow: hidden;
      padding: 10px;
    }
  }
  .light-card:hover {
    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  }
}
</style>
