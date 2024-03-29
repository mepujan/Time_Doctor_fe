import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Homepage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './admin/pages/SignUpPage';
import { PageNotFound } from './pages/NotFoundPage';
import { DashBoard } from './admin/pages/Dashboard';
import { PatientPage } from './admin/pages/PatientPage';
import { DoctorPage } from './admin/pages/DoctorPage';
import { PrivateRoute } from './PrivateRoute';
import { LoginPageRestrict } from './LoginPageRestrict';
import { ProfilePage } from './pages/ProfilePage';
import { ChangePasswordPage } from './pages/UpdatePasswordPage';
import { SendNotificationPage } from './admin/pages/SendNotificationPage';
import { AddSurgeryEventPage } from './admin/pages/AddSurgeryEvent';
import { EventsPage } from './admin/pages/EventsPage';
import {AdminRoute} from './AdminRoute';
import { MedicalQuestionaries } from './pages/MedicalQuestionaries';
import QuestionarieSubmittedPage from './pages/QuestionarieSubmittedPage';
import { Export } from './admin/components/export';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>

        } />
         <Route path="/medical-questionaries/:id" element={
          <PrivateRoute>
            <MedicalQuestionaries/>
          </PrivateRoute>

        } />
        <Route path="/medical-questionaries/submitted" element={
          <PrivateRoute>
            <QuestionarieSubmittedPage/>
          </PrivateRoute>

        } />
        <Route path="/profile" element={
            <ProfilePage />

        } />
        <Route path="/change-password" element={
          <PrivateRoute>
            <ChangePasswordPage />
          </PrivateRoute>

        } />
        <Route path="/login" element={
          <LoginPageRestrict>
            <LoginPage />
          </LoginPageRestrict>

        } />
        <Route path='/admin'>

        <Route path='schedule-surgery' element={
              <AdminRoute>
                <AddSurgeryEventPage />
              </AdminRoute>

          } />
          <Route path='patient' element={
            <AdminRoute>
              <PatientPage />
            </AdminRoute>
          } />
          <Route path='export' element={
            <AdminRoute>
              <Export />
            </AdminRoute>
          } />
           <Route path='events' element={
            <AdminRoute>
              <EventsPage />
            </AdminRoute>
          } />
          <Route path='add-user' element={
            <AdminRoute>
              <SignUpPage />
            </AdminRoute>
          } />
          <Route path='send-notification' element={
            <AdminRoute>
              <SendNotificationPage />
            </AdminRoute>
          } />
          <Route path='doctor' element={
            <AdminRoute>
              <DoctorPage />
            </AdminRoute>
          } />
           <Route path = "dashboard" element={
            <AdminRoute>
              <DashBoard />
            </AdminRoute>
          } />
           <Route index element={
            <AdminRoute>
              <DashBoard />
            </AdminRoute>
          } />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
