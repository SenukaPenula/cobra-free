import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    User
  } from 'firebase/auth';
  import { auth } from '@/lib/firebase';
  
  export const signUp = async (name: string, email: string, pass: string): Promise<User> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;
      await updateProfile(user, { displayName: name });
      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  export const signIn = async (email: string, pass: string): Promise<User> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      return userCredential.user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  export const logOut = async (): Promise<void> => {
    try {
      await signOut(auth);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  