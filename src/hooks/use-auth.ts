
import { useAuth } from '@/components/auth/AuthContext';

export { useAuth };

// Export a default function that returns the useAuth hook
export default function useAuthHook() {
  return useAuth();
}
