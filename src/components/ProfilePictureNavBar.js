import { Navbar } from "react-bootstrap"

export const ProfilePictureNavBar = () =>{
    const username = localStorage.getItem("username");
    const profileImage = localStorage.getItem("profile_pic");
    console.log(profileImage);
    return (
        <Navbar.Brand href="#home">
        <img
          src= '/time_doctor_logo.png'
          width="60"
          height="60"
          className="rounded-circle align-top"
          alt="Profile logo"
        /><br/>
        {username}
      </Navbar.Brand>
    )
}