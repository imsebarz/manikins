import React, { createContext, useReducer, useContext } from 'react';
import userReducer from './Reducers'



export const UserStateContext = createContext();
export const UserDispatchContext = createContext();


const initialState = {
    isAuthenticated: !!localStorage.getItem('username'),
    username: localStorage.getItem("username") || '',
    name: localStorage.getItem("name") || '',
    email: localStorage.getItem("email") || '',
    whitelistMail: ''
}



export function UserProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, initialState)

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
}


export function useUserState() {
    var context = useContext(UserStateContext);
    if (context === undefined) {
        throw new Error("useUserState must be used within a UserProvider");
    }
    return context;
}

//This makes avaliable the dispatch function all across the application
export function useUserDispatch() {
    var context = useContext(UserDispatchContext);
    if (context === undefined) {
        throw new Error("useUserDispatch must be used within a UserProvider");
    }
    return context;
}

