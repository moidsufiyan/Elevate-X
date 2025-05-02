import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Loader } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string | string[];
  redirectTo?: string;
}

export const ProtectedRoute = ({
  children,
  requiredRole,
  redirectTo = '/auth',
}: ProtectedRouteProps) => {
  const { user, loading, isAuthenticated } = useAuth();
  const location = useLocation();

  // Check if the route is being loaded for the first time
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Authenticating...</span>
      </div>
    );
  }

  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // Check for required role if specified
  if (requiredRole && user) {
    const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
    
    // Assuming user.role is a string like 'admin', 'mentor', 'founder'
    if (!roles.includes(user.role)) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  // If authenticated and has the required role, render the children
  return <>{children}</>;
};
