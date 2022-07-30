import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

interface Props {
  requiredRole?: 'ADMIN' | 'USER' | 'COACH';
  authNotAllowed?: boolean;
  authNotNeeded?: boolean;
}

export const ProtectedRoute = ({
  requiredRole,
  authNotAllowed = false,
  authNotNeeded = false,
}: Props) => {
  const { isLogged, userData } = useContext(UserContext);
  const { userLogged: auth, setUserLogged } = { ...isLogged };
  const { user, setUser } = { ...userData };
  const userRole = user?.role;
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3001/auth/refresh', {
        withCredentials: true,
      });
      setUser(response.data.data);
      setUserLogged(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  if (loading) return <div>loading...</div>;

  // if auth is not needed (/homePage)
  if (authNotNeeded) return <Outlet />;
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
