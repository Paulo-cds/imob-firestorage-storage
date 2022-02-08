//import firebase from 'firebase'
import firebase from "firebase/compat/app"
//import * as firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import "firebase/storage"
import "firebase/firestore"




const firebaseConfig = {
    apiKey: "AIzaSyB1rJGYMilELE8vVrmCcPuXw19nUeEwnJM",
    authDomain: "data-imobiliaria.firebaseapp.com",
    projectId: "data-imobiliaria",
    storageBucket: "data-imobiliaria.appspot.com",
    messagingSenderId: "583723718393",
    appId: "1:583723718393:web:bd3f29f4594272e1053428"
  };

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export {firebaseConfig, db}