import firebase from "./firebase"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh9nLlbeqNQHUQUksopPsXgubNUYUvZzI",
  authDomain: "netflix-clone-28142.firebaseapp.com",
  projectId: "netflix-clone-28142",
  storageBucket: "netflix-clone-28142.appspot.com",
  messagingSenderId: "686393664272",
  appId: "1:686393664272:web:fb31e93cb49f8ba4067b95"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.fireStore();
const auth = firebase.auth();

export { auth };
export default db;