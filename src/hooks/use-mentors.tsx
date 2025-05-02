
import { useQuery } from "@tanstack/react-query";
import { fetchMentors, fetchMentorById, ApiMentor } from "@/backend/services/api";
import { adaptMentorFromApi } from "@/shared/utils/adapter-utils";
import { Mentor } from "@/shared/types/models";

export function useMentors() {
  return useQuery({
    queryKey: ["mentors"],
    queryFn: async () => {
      try {
        const apiMentors = await fetchMentors();
        return apiMentors.map(mentor => adaptMentorFromApi(mentor));
      } catch (error) {
        console.error("Error fetching mentors:", error);
        throw error;
      }
    },
    staleTime: 60000, // 1 min cache
    refetchOnWindowFocus: false, // Avoid unnecessary calls
  });
}

export function useMentor(id: string) {
  return useQuery({
    queryKey: ["mentor", id],
    queryFn: async () => {
      try {
        const apiMentor = await fetchMentorById(id);
        if (!apiMentor) return null;
        return adaptMentorFromApi(apiMentor);
      } catch (error) {
        console.error(`Error fetching mentor with ID ${id}:`, error);
        throw error;
      }
    },
    enabled: !!id, // Only run the query if an ID is provided
    staleTime: 60000, // 1 min cache
    refetchOnWindowFocus: false,
  });
}
