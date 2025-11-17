import React, { createContext, useEffect, useState } from 'react';
import { auth, googleProvider } from '../../Firebase/Firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
      const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Email/Password login
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Email/Password signup
  const register = async (name, email, password, photoURL) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, { displayName: name, photoURL });
      toast.success("Registration successful!");
    } catch (error) {
      toast.error(error.message);
    }
    };

  // Google login
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Login with Google successful!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, loginWithGoogle, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
    
};

export default AuthProvider;