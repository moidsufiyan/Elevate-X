
import { useQuery } from "@tanstack/react-query";
import { fetchStartups, ApiStartup } from "@/backend/services/api";
import { adaptStartupFromApi } from "@/shared/utils/adapter-utils";
import { toast } from "sonner";

export function useStartups() {
  return useQuery({
    queryKey: ["startups"],
    queryFn: async () => {
      try {
        const apiStartups = await fetchStartups();
        return apiStartups.map(startup => adaptStartupFromApi(startup));
      } catch (error) {
        console.error("Error fetching startups:", error);
        toast.error("Failed to load startup data. Please try again.");
        throw error;
      }
    },
    staleTime: 60000, // 1 min cache
    refetchOnWindowFocus: false, // Avoid unnecessary calls
  });
}
