import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const PublicRoute: React.FC = () => {
      const { isAuthenticated } = useAuth();

      return isAuthenticated ? <Navigate to="/app/dashboard" /> : <Outlet />;
};

export default PublicRoute;