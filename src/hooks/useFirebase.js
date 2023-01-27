import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";




initializeAuthentication()
const useFirebase = () => {
const [user, setUser] = useState({});
const [loading, setLoading] = useState(true)
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();


const handleGoogleSignIn = () => {
setLoading(true)
return signInWithPopup(auth, googleProvider)

}

const handleRegister = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const handleEmailPasswordSignIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const handleEmailVerify = () => {
    setLoading(true)
     console.log(auth.currentUser);
     sendEmailVerification(auth.currentUser)
     .then(()=>console.log("verification send"))
}


const handleSignOut = () => {
    setLoading(true)
    signOut(auth)
    .then(()=> {
        setUser({})
    })
    .catch(error => {
        alert(error.message)
    })
}

useEffect(()=> {
    setLoading(true)
    onAuthStateChanged(auth, (user)=> {
        if(user) {
            setUser(user)
            setLoading(false)
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
auth,
loading,
setLoading


}
}

export default useFirebase;