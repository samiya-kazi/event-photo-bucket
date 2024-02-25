import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('google-token');
    if (!token) setIsAuthenticated(false);
  }, []);
  
  return (
    <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>
  )
}

export default ProtectedRoute