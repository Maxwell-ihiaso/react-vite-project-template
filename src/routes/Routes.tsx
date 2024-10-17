import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from '@/pages/public/About';
import NotFound from '@/pages/public/NotFound';
import { AuthProvider } from '@/context/AuthContext';
import Login from '@/pages/public/Login';
import PrivateRoute from './PrivateRoute';
import Dashboard from '@/pages/private/Dashboard';
import Home from '@/pages/public/Home';
import PublicRoute from './PublicRoute';

const AppRoutes: React.FC = () => {
      return (
            <AuthProvider>
                  <Router>
                        <Routes>
                              {/* Public routes */}
                              <Route element={<PublicRoute />}>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/login" element={<Login />} />
                              </Route>

                              {/* Private routes */}
                              <Route path="/app" element={<PrivateRoute />}>
                                    <Route path="dashboard" element={<Dashboard />} />
                              </Route>

                              {/* Redirect  */}
                              <Route path="/home" element={<Navigate to="/" />} />

                              {/* Catch-all route for 404 page */}
                              <Route path="*" element={<NotFound />} />
                        </Routes>
                  </Router>
            </AuthProvider>
      );
};

export default AppRoutes;
