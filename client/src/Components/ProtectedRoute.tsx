import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem('fb-id');
    console.log(id)
    if (!id) setIsAuthenticated(false);
  }, []);
  
  return (
    <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>
  )
}

export default ProtectedRoute