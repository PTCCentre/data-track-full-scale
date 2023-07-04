import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import {useState, useEffect} from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import '@firebase/firestore-compat'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsc2ET0FhO5JQcmIPXL5R99VnMN3iVfRc",
  authDomain: "church-quest-b3d00.firebaseapp.com",
  projectId: "church-quest-b3d00",
  storageBucket: "church-quest-b3d00.appspot.com",
  messagingSenderId: "209335426786",
  appId: "1:209335426786:web:8d267ab316308655d308bb"
};
// Initialize Firebase  
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export function signup(email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signin(email, password){
  return signInWithEmailAndPassword(auth, email, password);
}


 export function logout(){
    	return signOut(auth);
    }

// Custom Hook

export function useAuth(){
	const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
    	const unsub = onAuthStateChanged(auth, user=>setCurrentUser(user));
    	return unsub;
    
    },[])

	return currentUser;
}

// initialize Firebase
const fireDb=firebase.initializeApp(firebaseConfig);

//initializes services
const projectFirestore=fireDb.firestore()
const fireDbRef=fireDb.database().ref()
export {projectFirestore, fireDbRef}



