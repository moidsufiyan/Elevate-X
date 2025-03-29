
import { useQuery } from "@tanstack/react-query";
import { fetchStartups, Startup } from "@/services/api";

export function useStartups() {
  return useQuery({
    queryKey: ["startups"],
    queryFn: fetchStartups,
  });
}
