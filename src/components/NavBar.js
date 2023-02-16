import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { ProfilePictureNavBar } from './ProfilePictureNavBar';
import { useNavigate } from 'react-router-dom';

export const NavBar = () =>{
    const token = localStorage.getItem("userToken");
    const navigate = useNavigate();

    return (
    <Navbar bg="primary" expand="lg" variant= "dark">
      <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="/time_doctor_logo.png"
              width="80"
              height="80"
              style={{marginLeft:20}}
              className="d-inline-block align-top"
              alt="Time Doctor Logo"
            />{'  '}
            <br/>
            <b>Time Doctor</b>
          </Navbar.Brand>
          {token ? <ProfilePictureNavBar/> :  
          <Button style={{margin:20}} size="lg" 
          onClick={() =>navigate("/login")}
          variant="success">Login</Button>}
      </Container>
    </Navbar>
  );
}