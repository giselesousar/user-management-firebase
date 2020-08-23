import React, { createContext, useState, useEffect } from "react";
import {firebaseAuth} from '../../firebase/FirebaseUtils';

export const UserContext = createContext({user: null});

export default function UserProvider(props){
    const { children } = props;

    const [user, setUser] = useState(null);

    useEffect(() => {
        firebaseAuth.onAuthStateChanged(userAuth => {
            setUser(userAuth);
          });
    }, [user])

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}