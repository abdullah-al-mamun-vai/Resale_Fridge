import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase.init/firebase.init';
const auth = getAuth(app)
export const UserContext = createContext();
const AuthContext = ({ children }) => {
    const [user, setUser] = useState({})

    const [serverCurrentUser, setServerCurrentUser] = useState({})
    useEffect(() => {
        fetch(`https://freeze-resale-server-abdullah-al-mamun-vai.vercel.app/users/current/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setServerCurrentUser(data)
            })
    }, [user?.email])

    const [loading, setLoading] = useState(true);
    // handle sign in 
    const handleSign = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // handele Log in function 
    const handleLog = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass);
    }
    // handele Log in function 
    const handleGoogle = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // update user 
    const updatUs = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    // handle observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser => {
            setUser(currentUser)
            setLoading(false)
        }))
        return () => {
            unsubscribe()
        }
    }, [])
    // handle sign out 
    const handleOut = () => {
        signOut(auth).then(() => {

        })
    }

    const Info = {
        user,
        handleOut,
        handleLog,
        handleSign,
        loading,
        updatUs,
        serverCurrentUser,
        handleGoogle
    }
    return (
        <div>
            <UserContext.Provider value={Info}>
                {children}
            </UserContext.Provider>

        </div>
    );
};

export default AuthContext;