import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBaGwsl21i9j0VVTEhmmohPJm_SOcTxhYc",
    authDomain: "yashas-dairy.firebaseapp.com",
    databaseURL: "https://yashas-dairy.firebaseio.com",
    projectId: "yashas-dairy",
    storageBucket: "yashas-dairy.appspot.com",
    messagingSenderId: "305974104930",
    appId: "1:305974104930:web:bb394c04bc917047"
  }; 

  firebase.initializeApp(firebaseConfig)
//   firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase