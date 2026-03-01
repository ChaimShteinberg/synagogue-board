import Clock from "../components/Clock";
import ParnesPlace from "../components/ParnesPlace";
import TodayDate from "../components/TodayDate";
import ZmanimTable from "../components/ZmanimView";
import type { ParnesType } from "../types/parnesType";

export default function Home(props: { parnesList: ParnesType[] }) {
  return (
    <>
      <Clock />
      <TodayDate />
      <ZmanimTable/>
      <ParnesPlace parnesList={props.parnesList} />
    </>
  );
}
