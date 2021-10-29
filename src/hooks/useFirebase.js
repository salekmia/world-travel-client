import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();

    // google sign in
    const signInUsignGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
        
    }


    onAuthStateChanged(auth, (user) => {
        if(user) {
            setUser(user)
        } else {
            
        }
    })

    // email passsword sign up
    const signUpUsingPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // email password sign in
    const signInUsingPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    const setUserName = (name) => {
        return updateProfile(auth.currentUser, {displayName: name})
    }

    // logout
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
            console.log('logout success')
        })
    }
    return {
        user,
        signInUsignGoogle,
        signUpUsingPassword,
        signInUsingPassword,
        logOut, 
        setUserName,
        setUser
    }
}

export default useFirebase;