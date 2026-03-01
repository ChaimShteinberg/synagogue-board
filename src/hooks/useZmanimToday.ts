import { useQuery } from "@tanstack/react-query";
import { fetchZmanimToday } from "../api/getZmanimToday";

export function useZmanimToday() {
  return useQuery({
    queryKey: ["zmanim", "today"],
    queryFn: fetchZmanimToday,
    staleTime: 1000 * 60 * 60, // שעה
  });
}