import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ProfilePictureNavBar } from "./ProfilePictureNavBar";

export const LoginBtn = () =>{
    const navigate = useNavigate();
    const token = localStorage.getItem("userToken");
   return(
        <>
            {token ?<ProfilePictureNavBar/>:
            <Button style={{margin:20}} size="lg" 
            onClick={() =>navigate("/login")}
            variant="success">Login</Button>}
        </>
   );
}