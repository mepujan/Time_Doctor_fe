import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Homepage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { PageNotFound } from './pages/NotFoundPage';
import { DashBoard } from './admin/pages/Dashboard';
import { PatientPage } from './admin/pages/PatientPage';
import { DoctorPage } from './admin/pages/DoctorPage';
import { PrivateRoute } from './PrivateRoute';
import { LoginPageRestrict } from './LoginPageRestrict';
import { ProfilePage } from './pages/ProfilePage';
import { ChangePasswordPage } from './pages/ChangePasswordPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        
        } />
           <Route path="/profile" element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        
        } />
         <Route path="/change-password" element={
          <PrivateRoute>
            <ChangePasswordPage/>
          </PrivateRoute>
        
        } />
        <Route path="/login" element={
          <LoginPageRestrict>
            <LoginPage />
          </LoginPageRestrict>
        
        } />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/admin'>
          <Route path='dashboard' element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          
          } />
          <Route path='patient' element={
                  <PrivateRoute>
                  <PatientPage />
                </PrivateRoute>
          } />
          <Route path='doctor' element={
                  <PrivateRoute>
                  <DoctorPage />
                </PrivateRoute>
          } />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
