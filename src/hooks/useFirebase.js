import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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

    // github sign in
    const signInUsignGithub = () => {
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider)
    }

    onAuthStateChanged(auth, (user) => {
        if(user) {
            setUser(user)
        } else {
            console.log('user sign out')
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
        signInUsignGithub,
        signUpUsingPassword,
        signInUsingPassword,
        logOut, 
        setUserName,
        setUser
    }
}

export default useFirebase;