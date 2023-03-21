import React, { createContext, useContext } from 'react';

const AUTH_CONTEXT = createContext();

const AuthProvider = ({children}) => {































    const value = {

    };

    return (
        <AUTH_CONTEXT.Provider value={value}>
            {children}
        </AUTH_CONTEXT.Provider>
    );
};

export const useAuthContext = () => {
    const value = useContext(AUTH_CONTEXT);
    return value;
};

export default AuthProvider;