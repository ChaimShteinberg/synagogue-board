import { HDate } from "@hebcal/core";
import "../styles/TodayDate.css"

export default function TodayDate() {
  const date = new HDate(new Date());

  return <div id="TodayDate">{date.renderGematriya(true)}</div>;
}
