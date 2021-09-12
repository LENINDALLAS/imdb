import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBJO0EhcTpIFKI-Bew82LCbS72A-6bWfO0",
    authDomain: "movie-app-efce0.firebaseapp.com",
    projectId: "movie-app-efce0",
    storageBucket: "movie-app-efce0.appspot.com",
    messagingSenderId: "432622325483",
    appId: "1:432622325483:web:a446e8f458e70e772c78ae"
  };

// Initialize firebase
firebase.initializeApp(firebaseConfig)

export default firebase;