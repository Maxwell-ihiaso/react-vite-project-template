// src/pages/Login.tsx
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
      const { login } = useAuth();
      const navigate = useNavigate();

      const handleLogin = () => {
            login();
            navigate('/app/dashboard'); // Redirect to a secured page after login
      };

      return (
            <div>
                  <h1>Login Page</h1>
                  <button onClick={handleLogin}>Login</button>
            </div>
      );
};

export default Login;
