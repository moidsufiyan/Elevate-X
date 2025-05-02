
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
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const userData = await getCurrentUser();
      setUser(userData);
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
    isAuthenticated: !!user,
    logout,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
