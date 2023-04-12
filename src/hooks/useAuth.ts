import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const useAuth = () => {

    const [validUser, setValidUser] = React.useState<any>(false);

    const auth = getAuth();

    const login = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setValidUser(userCredential.user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    return {
        login,
        validUser
    }
}