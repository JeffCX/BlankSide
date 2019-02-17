import * as firebase from "firebase"
var config = {
    apiKey: "AIzaSyAy00SJ7NINY4c1iGsjG-B8-Ao9KlSTXg8",
    authDomain: "smart-scanner-38c89.firebaseapp.com",
    databaseURL: "https://smart-scanner-38c89.firebaseio.com",
    projectId: "smart-scanner-38c89",
    storageBucket: "smart-scanner-38c89.appspot.com",
    messagingSenderId: "552126616979"
  };
  
  firebase.initializeApp(config);
  export default firebase.database()