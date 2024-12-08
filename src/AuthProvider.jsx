import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { auth } from "./firebase.config";
import toast from "react-hot-toast";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)
  const [ updateInfo,setUpdateInfo] = useState({})
  const googleProvider = new GoogleAuthProvider()
  const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
      if(currentUser){
        setUser(currentUser)
       }else{
        setUser(null)
       }
      setLoading(false)
    })
    return () => {
      unSubscribe()
    }
  },[])
   
  const loginUser = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut = () =>{
    setLoading(true)
    return signOut(auth)
  
  }
  const profileUpdate = (updateData) => {
    updateProfile(auth.currentUser,updateData)
  }
  const GoogleSignUp = () => {
    return signInWithPopup(auth,googleProvider)
  }


  


 const userData = {
      user,
      setUser,
      loading,
      createUser,
      loginUser,
      logOut,
      profileUpdate,
      setUpdateInfo,
      updateInfo,
      GoogleSignUp
 }
    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
};
 
export default AuthProvider;