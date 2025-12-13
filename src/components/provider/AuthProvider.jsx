import { useEffect, useState, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Loading } from "../../pages/Loading";

//  Context
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('email')
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  // const passwordReset = (email) => {
  //   return sendPasswordResetEmail(auth, email);
  // };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const email = currentUser?.email || currentUser?.providerData[0]?.email

      setUser({...currentUser, email});
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading){
    return <div className=""><Loading/></div>
  }

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signin,
    loading,
    setLoading,
    updateUser,
    signInWithGoogle,
    // passwordReset,
  };

  
  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
