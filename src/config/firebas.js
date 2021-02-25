import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB6TI6uYeWzlAoH0j-z9BQhYasHkxEAwHY",
    authDomain: "netflix-clone-8ae3f.firebaseapp.com",
    projectId: "netflix-clone-8ae3f",
    storageBucket: "netflix-clone-8ae3f.appspot.com",
    messagingSenderId: "105550543003",
    appId: "1:105550543003:web:4f4125710d5b62b7302e3e"
  };

const firebasApp = firebase.initializeApp(firebaseConfig)
const db = firebasApp.firestore
const auth = firebase.auth()

export {auth}
export default db  