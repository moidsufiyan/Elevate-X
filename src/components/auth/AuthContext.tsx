
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser, logoutUser } from '@/services/api';
import { User } from '@/shared/types/models';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

// Create a default context value
const defaultContextValue: AuthContextType = {
  user: null,
  loading: true,
  isAuthenticated: false,
  logout: () => {},
  refreshUser: async () => {},
};

// Create the context with the default value
const AuthContext = createContext<AuthContextType>(defaultContextValue);

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setLoading(true);
      // Auto-authenticate with a mock user for demo purposes
      const mockUser: User = {
        id: 'demo-user-id',
        name: 'Demo User',
        email: 'demo@example.com',
        role: 'founder', // Default role for demo
        createdAt: new Date().toISOString()
      };
      setUser(mockUser);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  const refreshUser = async () => {
    await fetchUser();
  };

  const value = {
    user,
    loading,
    isAuthenticated: true, // Always authenticated for demo purposes
    logout,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
