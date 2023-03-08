import { Navigate } from "react-router-dom";

export const AdminRoute = ({children}) =>{
    const token = localStorage.getItem("userToken");
    const role = localStorage.getItem("role");

    if(token && role ==="administrator"){
        return children;
    }
    return <Navigate to="/" />;

}