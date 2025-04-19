import { PropsWithChildren, createContext, useState } from "react";
import { AuthContextType } from "./AuthContextTypes";
import { getInitialToken } from "../../utils/getInitialToken";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }: PropsWithChildren ) => {
    const [token, setToken] = useState<AuthContextType['token']>(getInitialToken);

    const login = (newToken: string, remember: boolean) => {
        remember ? localStorage.setItem('token', newToken) : sessionStorage.setItem('token', newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        setToken(null);
    };

    return(
        <AuthContext.Provider value={{token, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};