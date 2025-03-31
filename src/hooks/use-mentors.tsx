
import { useQuery } from "@tanstack/react-query";
import { fetchMentors, fetchMentorById, Mentor } from "@/services/api";

export function useMentors() {
  return useQuery({
    queryKey: ["mentors"],
    queryFn: fetchMentors,
    staleTime: 60000, // 1 min cache
    refetchOnWindowFocus: false, // Avoid unnecessary calls
  });
}

export function useMentor(id: string) {
  return useQuery({
    queryKey: ["mentor", id],
    queryFn: () => fetchMentorById(id),
    enabled: !!id, // Only run the query if an ID is provided
    staleTime: 60000, // 1 min cache
    refetchOnWindowFocus: false,
  });
}
