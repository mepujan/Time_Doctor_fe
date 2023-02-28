import { Navigate } from "react-router-dom";

export const LoginPageRestrict = ({children})=>{
    const token = localStorage.getItem("userToken");
    return !token ?children : <Navigate to= "/" />

}