import { Navbar,NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ProfilePictureNavBar = () =>{
    const username = localStorage.getItem("username");
    const profileImage = localStorage.getItem("profile_pic");
    const ImageURL = "http://"+profileImage;

    const navigate = useNavigate();

    const logoutMethod = (e) =>{
      e.preventDefault();
      localStorage.clear();
      navigate("/login");
    }
    return (
        <Navbar.Brand>
       <img
          src={ImageURL}
          width="60"
          height="60"
          className="rounded-circle align-top ms-4"
          alt="Profile logo"
        /><br/> 
        <NavDropdown title={username} id="basic-nav-dropdown" className="me-4">
              <NavDropdown.Item href="" >View Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={logoutMethod}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
      </Navbar.Brand>
    );
}