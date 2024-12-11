import React, { useState } from 'react';
import { createContext } from "react";
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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

  const authInfo = {
    user,
    loading,
    setLoading,
    googleLogin,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;