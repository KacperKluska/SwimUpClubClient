import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

interface Props {
  requiredRole?: 'ADMIN' | 'USER' | 'COACH';
  authNotAllowed?: boolean;
}

export const ProtectedRoute = ({
  requiredRole,
  authNotAllowed = false,
}: Props) => {
  const { isLogged, userData } = useContext(UserContext);
  const { userLogged: auth } = { ...isLogged };
  const { user } = { ...userData };
  const userRole = user?.role;

  // TODO fix refresh error
  // if we are logged and trying to sign-in again
  if (authNotAllowed && auth) return <Navigate to="/" />;
  // if we are not logged and trying to get resources for sign-in users
  if (!auth && !authNotAllowed) return <Navigate to="/sign-in" />;
  // if we are logged and role is not required
  if (!requiredRole) return <Outlet />;
  // if we are logged and trying to get resources without proper role
  if (userRole !== requiredRole) return <Navigate to="/" />;
  return <Outlet />;
};
