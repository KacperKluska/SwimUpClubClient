import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { LoginPage } from '../../pages/LoginPage/LoginPage.component';

export const ProtectedRoute = () => {
  const { isLogged } = useContext(UserContext);
  const auth = isLogged?.userLogged;
  return auth ? <Outlet /> : <LoginPage />;
};
