import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAG9omtoz0UZe14Ijj9heyFxqAFDWTcX_0",
    authDomain: "facebook-clone-8e8f4.firebaseapp.com",
    projectId: "facebook-clone-8e8f4",
    storageBucket: "facebook-clone-8e8f4.appspot.com",
    messagingSenderId: "51423397864",
    appId: "1:51423397864:web:d20ad78af1ac860a66c65d",
    measurementId: "G-5NCMWD05HR"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{ auth , provider };
export default db;