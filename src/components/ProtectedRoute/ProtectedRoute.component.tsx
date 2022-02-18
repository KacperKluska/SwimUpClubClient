import { Outlet } from 'react-router-dom';
import { LoginPage } from '../../pages/LoginPage/LoginPage.component';

export const ProtectedRoute = () => {
  const auth = true;
  return auth ? <Outlet /> : <LoginPage />;
};
