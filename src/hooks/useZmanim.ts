import { useQuery } from "@tanstack/react-query";
import { fetchZmanim } from "../api/getZmanim";

export function useZmanimToday() {
  return useQuery({
    queryKey: ["zmanim", "today"],
    queryFn: () => fetchZmanim(new Date()),
    staleTime: 1000 * 60 * 60, // שעה
  });
}

export function useZmanimErevSabat() {
  return useQuery({
    queryKey: ["zmanim", "sabat"],
    queryFn: () => fetchZmanim(getNextShabbat()[0]),
    staleTime: 1000 * 60 * 60,
  });
}

export function useZmanimSabat() {
  return useQuery({
    queryKey: ["zmanim", "sabat"],
    queryFn: () => fetchZmanim(getNextShabbat()[1]),
    staleTime: 1000 * 60 * 60,
  });
}

const getNextShabbat = (): Date[] => {
  const now = new Date();
  const nextShabbat = new Date(now);
  const nextErevShabbat = new Date(now);

  const daysUntilShabbat = (6 - now.getDay() + 7) % 7 || 7;

  nextShabbat.setDate(now.getDate() + daysUntilShabbat);
  nextErevShabbat.setDate(now.getDate() + (daysUntilShabbat - 1));
  return [nextErevShabbat, nextShabbat];
};
