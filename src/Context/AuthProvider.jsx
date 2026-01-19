import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext } from './AuthContext';

import {auth} from '../FireBase/FireBase.init';

import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';

// Theme management logic
const ThemeInitializer = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return null;
};

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }
    const signOutUser = () => {
      setLoading(true)
      return signOut(auth)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
      })
      return () => {
        unsubscribe()
      }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,

    }
    return (
        <div>
          {/* Initialize theme immediately */}
          <ThemeInitializer />
          {/* AuthContext Added */}
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
            
        </div>
    );
};

export default AuthProvider;