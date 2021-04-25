import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDuS4Yy8bmZQi4Kc8hDe7W1-JSHR9ZcnDM",
    authDomain: "disneyplus-clone-app.firebaseapp.com",
    projectId: "disneyplus-clone-app",
    storageBucket: "disneyplus-clone-app.appspot.com",
    messagingSenderId: "88760494601",
    appId: "1:88760494601:web:b79aacc1e8d44b38d026d8",
    measurementId: "G-DQC9B849LC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;