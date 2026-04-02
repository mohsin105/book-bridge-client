import React, { createContext } from 'react';
import useAuth from '../hooks/useAuth';

const AuthContext = createContext();

export const AuthProvider = ({children,}) => {
    const allValue = useAuth();
    
    return(
        <AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;