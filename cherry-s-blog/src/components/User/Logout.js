import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";


export function Logout() {
    const { onLogoutHandler } = useContext(AuthContext);
    
    useEffect(() => {
        onLogoutHandler()
    }, [])
    
    return <Navigate to={'/'}/>
}