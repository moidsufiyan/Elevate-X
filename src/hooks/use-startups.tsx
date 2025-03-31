
import { useQuery } from "@tanstack/react-query";
import { fetchStartups, Startup } from "@/services/api";

export function useStartups() {
  return useQuery({
    queryKey: ["startups"],
    queryFn: fetchStartups,
    staleTime: 60000, // 1 min cache
    refetchOnWindowFocus: false, // Avoid unnecessary calls
  });
}
