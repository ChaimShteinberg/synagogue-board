import Clock from "../components/Clock";
import ParnesPlace from "../components/ParnesPlace";
import TodayDate from "../components/TodayDate";
import type { ParnesType } from "../types/parnesType";

export default function Home(props: { parnesList: ParnesType[] }) {
  return (
    <>
      <Clock />
      <TodayDate />
      <ParnesPlace parnesList={props.parnesList} />
    </>
  );
}
