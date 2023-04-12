import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LoginBtn } from '../../components/LoginBtn';
import { Link } from 'react-router-dom';

export const NavBar = ({ loginBtn }) => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container fluid>
        <Link to="/admin/dashboard">
          <Navbar.Brand>
            <img
              src="/time_doctor_logo.png"
              width="80"
              height="80"
              style={{ marginLeft: 20, objectFit: "cover" }}
              className="d-inline-block align-top img-fluid"
              alt="Time Doctor Logo"
            />{'  '}
            <br />
            <b>Time Doctor</b>
          </Navbar.Brand>
        </Link>


        {loginBtn && <LoginBtn />}
      </Container>
    </Navbar>
  );
}