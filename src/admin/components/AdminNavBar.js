import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LoginBtn } from '../../components/LoginBtn';

export const NavBar = ({ loginBtn }) => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/admin/dashboard">
          <img
            src="/time_doctor_logo.png"
            width="80"
            height="80"
            style={{ marginLeft: 20,objectFit:"cover" }}
            className="d-inline-block align-top img-fluid"
            alt="Time Doctor Logo"
          />{'  '}
          <br />
          <b>Time Doctor</b>
        </Navbar.Brand>

        {loginBtn && <LoginBtn />}
      </Container>
    </Navbar>
  );
}