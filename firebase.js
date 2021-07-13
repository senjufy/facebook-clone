import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAY-qe-NG7kTGuwP8uJiKLwIN21x7mmNHg",
    authDomain: "facebook-clone-e0a94.firebaseapp.com",
    projectId: "facebook-clone-e0a94",
    storageBucket: "facebook-clone-e0a94.appspot.com",
    messagingSenderId: "272814126929",
    appId: "1:272814126929:web:3189d6e0ad9289c40a0570"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const storage = firebase.storage()

export {db, storage}