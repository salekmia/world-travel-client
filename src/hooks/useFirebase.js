import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const [isLoding, setIsLoding] = useState(true)

    // google sign in
    const signInUsignGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }


    

    // email passsword sign up
    const signUpUsingPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        .finally(()=> setIsLoding(false))
    }

    // email password sign in
    const signInUsingPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        .finally(()=> setIsLoding(false))
        
    }

    const setUserName = (name) => {
        return updateProfile(auth.currentUser, {displayName: name})
        .finally(()=> setIsLoding(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            } else {
                
            }
            setIsLoding(false)
        })
    }, [])

    // logout
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(()=> setIsLoding(false))
    }
    return {
        user,
        signInUsignGoogle,
        signUpUsingPassword,
        signInUsingPassword,
        logOut, 
        setUserName,
        setUser,
        isLoding
    }
}

export default useFirebase;