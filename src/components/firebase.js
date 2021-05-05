import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD1XtUj-ihYYtWZInn7dfgPuP1pAF4gIlo",
    authDomain: "worktalk-2b6fe.firebaseapp.com",
    databaseURL: "https://worktalk-2b6fe-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "worktalk-2b6fe",
    storageBucket: "worktalk-2b6fe.appspot.com",
    messagingSenderId: "489243592533",
    appId: "1:489243592533:web:90366e67e90792535cd1dc"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db; 
  
  export const logOut = () => {
    auth.signOut().then(()=> {
      console.log('logged out')
      window.location.href="/Login";

    }).catch((error) => {
      console.log(error.message)
    })
  }