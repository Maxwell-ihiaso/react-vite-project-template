// src/pages/Dashboard.tsx
import React from 'react';
import { useAuth } from '@/context/AuthContext';

const Dashboard: React.FC = () => {
      const { logout } = useAuth();

      return (
            <div>
                  <h1>Dashboard</h1>
                  <p>This is a protected route. Only authenticated users can see this.</p>
                  <button onClick={logout}>Logout</button>
            </div>
      );
};

export default Dashboard;
