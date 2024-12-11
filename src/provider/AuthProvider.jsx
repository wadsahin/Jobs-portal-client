import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthContext = new createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  // User creation
  const newUserCreate = () =>{

  }

  // Google Login
  const provider = new GoogleAuthProvider();
  const googleLogin = () =>{
    return signInWithPopup(auth, provider);
  }

  // Email & Password Login
  const userLogin = () => {

  }

   // Sign Out 
   const userSignOut = () => {
    return signOut(auth);
  }

  // Set observer manage user status
  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setUser(currentUser);
    })
    return () =>{
      unsubscribe();
    }

  }, []) 

 

  const authInfo = {
    user,
    loading,
    setLoading,
    googleLogin,
    userSignOut,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;