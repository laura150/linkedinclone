import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage"
import { getAuth, GoogleAuthProvider, FacebookAuthProvider  } from "firebase/auth"
import { getFirestore } from 'firebase/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyArINzrnu3VeiINwqrTNxKKK3SrxRsR0q4",
    authDomain: "linkedin-clone-f9b9b.firebaseapp.com",
    projectId: "linkedin-clone-f9b9b",
    storageBucket: "linkedin-clone-f9b9b.appspot.com",
    messagingSenderId: "308096008308",
    appId: "1:308096008308:web:20ad033d379b905cdb1121"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)
  const googleAuthProvider = new GoogleAuthProvider();
  const facebookAuthProvider = new FacebookAuthProvider();
  const storage = getStorage(firebaseApp)

  // async function getCities(db) {
  //   const citiesCol = collection(db, 'cities');
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());
  //   return cityList;
  // }

  export {auth, googleAuthProvider, facebookAuthProvider, db, storage}

 


 // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";