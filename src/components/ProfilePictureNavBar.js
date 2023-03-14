import { Navbar,NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useToken } from "../hooks/useToken";

export const ProfilePictureNavBar = () =>{
    const username = useToken('username');
    const profileImage = useToken("profile_pic");
    const imageUrl = `http://${profileImage}`;

    const navigate = useNavigate();

    const logoutMethod = (e) =>{
      e.preventDefault();
      localStorage.clear();
      navigate("/login");
    }
    return (
        <Navbar.Brand>
       <img
          src={imageUrl}
          width="60"
          height="60"
          style={{objectFit:"cover"}}
          className="rounded-circle align-top ms-4"
          alt="Profile logo"
        /><br/> 
        <NavDropdown title={username} id="basic-nav-dropdown" className="me-4">
              <NavDropdown.Item href="/profile" >View Profile</NavDropdown.Item>
              <NavDropdown.Item href="/change-password" >Change Password</NavDropdown.Item>
              <NavDropdown.Item onClick={logoutMethod}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
      </Navbar.Brand>
    );
}