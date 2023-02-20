import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Login } from "../components/Login";


export const LoginPage = () => {
  return (
     <>
      <NavBar loginBtn={false}/>
      <Login />
      <Footer/>
    </>
  );
}

