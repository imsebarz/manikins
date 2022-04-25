import React, { createContext, useReducer, useContext } from 'react';
import userReducer from './Reducers'



export const UserStateContext = createContext();
export const UserDispatchContext = createContext();


const initialState = {
    token: '',
    isAuthenticated: !!localStorage.getItem('iduser'),
    iduser: localStorage.getItem("iduser") || '',
    username: localStorage.getItem("username") || '',
    firstname: localStorage.getItem("firstname") || '',
    middlename: localStorage.getItem("middlename") || '',
    lastname: localStorage.getItem("lastname") || '',
    email: localStorage.getItem("email") || '',
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

