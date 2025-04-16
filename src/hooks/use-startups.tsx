
import { useQuery } from "@tanstack/react-query";
import { fetchStartups, ApiStartup } from "@/services/api";
import { adaptStartupFromApi } from "@/shared/utils/adapter-utils";

export function useStartups() {
  return useQuery({
    queryKey: ["startups"],
    queryFn: async () => {
      const apiStartups = await fetchStartups();
      return apiStartups.map(startup => adaptStartupFromApi(startup));
    },
    staleTime: 60000, // 1 min cache
    refetchOnWindowFocus: false, // Avoid unnecessary calls
  });
}
