// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJrIxQxkj_3xbawNZy7wUWrM8fraS-5OQ",
    authDomain: "fir-auth-80371.firebaseapp.com",
    projectId: "fir-auth-80371",
    storageBucket: "fir-auth-80371.appspot.com",
    messagingSenderId: "298782927941",
    appId: "1:298782927941:web:338d15192f73a0cf45872c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const google = () => {
    let provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
}
export const signupWIthEmail=async(email,password)=>{
    let userSignup=await createUserWithEmailAndPassword(auth,email,password)
    sendEmailVerification(userSignup.user)
    return userSignup

}
export const signinWithEmail=async(email,password)=>{
    let userSignin=await signInWithEmailAndPassword(auth,email,password)
    return userSignin;
}

export const resetPassword=async(email)=>{

    let userReset=await sendPasswordResetEmail(auth,email)
    return userReset;
}