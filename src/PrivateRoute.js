
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children})=>{
    const token = localStorage.getItem("userToken");
    const role = localStorage.getItem("role");

    if(token && role !== "administrator"){
        return children;
    }
    return <Navigate to="/admin/dashboard" />;
}
