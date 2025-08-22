import { mentors, getMentorById, Mentor } from "@/data/mentors";

// Frontend-only hook using static data
export function useMentors() {
  return {
    data: mentors,
    isLoading: false,
    error: null,
    isError: false,
    isSuccess: true
  };
}

export function useMentor(id: string) {
  const mentor = getMentorById(id);
  
  return {
    data: mentor || null,
    isLoading: false,
    error: mentor ? null : new Error("Mentor not found"),
    isError: !mentor,
    isSuccess: !!mentor
  };
}