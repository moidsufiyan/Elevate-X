
import { useQuery } from "@tanstack/react-query";
import { fetchMentors, fetchMentorById, Mentor as ApiMentor } from "@/services/api";
import { adaptMentorFromApi } from "@/shared/utils/adapter-utils";
import { Mentor } from "@/shared/types/models";

export function useMentors() {
  return useQuery({
    queryKey: ["mentors"],
    queryFn: async () => {
      const apiMentors = await fetchMentors();
      return apiMentors.map(mentor => adaptMentorFromApi(mentor));
    },
    staleTime: 60000, // 1 min cache
    refetchOnWindowFocus: false, // Avoid unnecessary calls
  });
}

export function useMentor(id: string) {
  return useQuery({
    queryKey: ["mentor", id],
    queryFn: async () => {
      const apiMentor = await fetchMentorById(id);
      return adaptMentorFromApi(apiMentor);
    },
    enabled: !!id, // Only run the query if an ID is provided
    staleTime: 60000, // 1 min cache
    refetchOnWindowFocus: false,
  });
}
