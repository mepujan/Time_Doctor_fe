import { Navbar } from "react-bootstrap"

export const ProfilePictureNavBar = () =>{
    const username = localStorage.getItem("username");
    const profileImage = localStorage.getItem("profile_pic");
    const ImageURL = "http://"+profileImage
    return (
        <Navbar.Brand href="#home">
       <img
          src={ImageURL}
          width="60"
          height="60"
          className="rounded-circle align-top"
          alt="Profile logo"
        /><br/>
        {username}
      </Navbar.Brand>
    )
}