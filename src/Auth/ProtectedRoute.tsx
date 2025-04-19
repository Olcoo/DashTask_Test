import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
    const { token } = useAuth();

    if(!token) return <Navigate to={'login'} replace/>

    return children;
};