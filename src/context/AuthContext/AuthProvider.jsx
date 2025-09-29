import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, 
    signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.init";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("User in the auth state change:", currentUser)
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    },[])

    const authIfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logout
    }

    return (
        <AuthContext value={authIfo}>
            { children }
        </AuthContext>
    );
};

export default AuthProvider;