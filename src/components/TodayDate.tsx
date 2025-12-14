import { HDate } from "@hebcal/core";

export default function TodayDate() {
  const date = new HDate(new Date());

  return <>{date.renderGematriya(true)}</>;
}
