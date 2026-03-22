import type { Operator } from "../types/operators";

export const formatTime = (
  isoString: string,
  operator?: Operator,
  updateMinutes?: number,
) => {
  const date = new Date(isoString);
  if (updateMinutes) {
    if (operator === "plus") {
      date.setMinutes(date.getMinutes() + updateMinutes);
    } else if (operator === "minus") {
      date.setMinutes(date.getMinutes() - updateMinutes);
    }
  }
  return date.toLocaleTimeString("he-IL", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
