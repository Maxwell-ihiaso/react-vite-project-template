import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
      isAuthenticated: boolean;
      login: () => void;
      logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
      const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
            return localStorage.getItem('isAuthenticated') === 'true';
      });

      const login = () => {
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
      };

      const logout = () => {
            setIsAuthenticated(false);
            localStorage.removeItem('isAuthenticated');
      };

      useEffect(() => {
            setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
      }, []);

      return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
      const context = useContext(AuthContext);
      if (!context) {
            throw new Error('useAuth must be used within an AuthProvider');
      }
      return context;
};
