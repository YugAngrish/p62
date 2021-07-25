import firebase from 'firebase'


  var firebaseConfig = {
    apiKey: "AIzaSyDYui2UCt2HKOAre1aNRT-RkQlM96-jjLE",
    authDomain: "attendance-app-9fd3b.firebaseapp.com",
    projectId: "attendance-app-9fd3b",
    storageBucket: "attendance-app-9fd3b.appspot.com",
    messagingSenderId: "808103469066",
    appId: "1:808103469066:web:5472df6468608e04d3fff3"
  };
  
  firebase.initializeApp(firebaseConfig);



export default firebase.database()