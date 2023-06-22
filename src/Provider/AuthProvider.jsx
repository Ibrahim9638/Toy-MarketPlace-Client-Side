import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading]= useState(true);

    // Create User
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Register SignUp
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Google SignIn
    const googleSignIn =() =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Logout
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    
    // UseEffect uses
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
            console.log("current user", currentUser);
        });
        return () =>{
            return unsubscribe;
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;