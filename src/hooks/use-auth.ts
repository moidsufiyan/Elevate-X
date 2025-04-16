
// Re-export the AuthContext hooks for easier imports
import { useAuth } from '@/components/auth/AuthContext';

export { useAuth };

// Export a default function that just returns the useAuth hook
export default function useAuthHook() {
  return useAuth();
}
