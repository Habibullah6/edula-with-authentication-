import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";




initializeAuthentication()
const useFirebase = () => {
const [user, setUser] = useState({});

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();


const handleGoogleSignIn = () => {
return signInWithPopup(auth, googleProvider)

}

const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const handleEmailPasswordSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

const handleEmailVerify = () => {
     console.log(auth.currentUser);
     sendEmailVerification(auth.currentUser)
     .then(()=>console.log("verification send"))
}


const handleSignOut = () => {
    signOut(auth)
    .then(()=> {
        setUser({})
    })
    .catch(error => {
        alert(error.message)
    })
}

useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
        if(user) {
            setUser(user)
        }
        
    })
}, [])


return {
    
setUser,
handleGoogleSignIn,
handleRegister,
handleEmailPasswordSignIn,
user,
handleSignOut,
handleEmailVerify,
updateProfile,
auth


}
}

export default useFirebase;