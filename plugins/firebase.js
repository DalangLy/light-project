import * as firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAm2eY5vD97u2zY0bqGom9uy63ZS0El5sM',
  authDomain: 'light-project-90a50.firebaseapp.com',
  databaseURL: 'https://light-project-90a50.firebaseio.com',
  projectId: 'light-project-90a50',
  storageBucket: 'light-project-90a50.appspot.com',
  messagingSenderId: '317753109118',
  appId: '1:317753109118:web:d7f7427c1a526c5cca862f',
  measurementId: 'G-VXQE4C6WVC',
}

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}
