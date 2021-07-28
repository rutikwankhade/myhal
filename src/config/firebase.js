
import firebase from "firebase";
import "firebase/storage";
import 'firebase/firestore'


export const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_API_ID
};


//initializing firebase
//  const app = !firebase.apps.length
//     ? firebase.initializeApp(config)
//     : firebase.app();

const app =firebase.initializeApp(config)

const db = app.firestore();
const storage = firebase.storage();



export { db, storage }



