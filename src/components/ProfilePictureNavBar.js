import { Navbar } from "react-bootstrap"

export const ProfilePictureNavBar = () =>{
    const username = localStorage.getItem("username");
    const profileImage = localStorage.getItem("profile_pic").toString();
    console.log(profileImage);
    return (
        <Navbar.Brand href="#home">
       <img
          src="http://localhost:3500/images/profile_picture/1676553227662_time_doctor.png"
          width="60"
          height="60"
          className="rounded-circle align-top"
          alt="Profile logo"
        /><br/>
        {username}
      </Navbar.Brand>
    )
}