import { startups } from "@/data/startups";

// Frontend-only hook using static data
export function useStartups() {
  return {
    data: startups,
    isLoading: false,
    error: null,
    isError: false,
    isSuccess: true
  };
}