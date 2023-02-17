import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
import { HomePage } from './pages/Homepage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { PageNotFound } from './pages/NotFoundPage';
// import { LogOut } from './components/LogOut';

function App() {
  const token = localStorage.getItem("userToken");
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/login" element = {!token?<LoginPage/> : <Navigate replace to ={"/"} />}/>
          <Route path='/signup' element = {<SignUpPage />} />
          {/* <Route path = '/logout' element = {<LogOut/>} /> */}
          <Route path ="*" element = {<PageNotFound />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
