import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const AuthContext = new createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  // User creation
  const newUserCreate = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Google Login
  const provider = new GoogleAuthProvider();
  const googleLogin = () =>{
    return signInWithPopup(auth, provider);
  }

  // Email & Password Login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Update Profile
  const updateUser = (updatedInfo) =>{
    return updateProfile(auth.currentUser, updatedInfo);
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
    newUserCreate,
    userLogin,
    googleLogin,
    userSignOut,
    updateUser,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;