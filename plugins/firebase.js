import * as firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyB6LMS0SbGS-tvTW4BLloaSKuMyoZwEKJw',
  authDomain: 'dsys-721ca.firebaseapp.com',
  databaseURL: 'https://dsys-721ca.firebaseio.com',
  projectId: 'dsys-721ca',
  storageBucket: 'dsys-721ca.appspot.com',
  messagingSenderId: '79512194642',
  appId: '1:79512194642:web:a16b183333a4c4dfb1998b',
  measurementId: 'G-K32K8Q7MPC',
}

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}
