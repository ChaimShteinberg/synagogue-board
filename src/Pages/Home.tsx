import Clock from "../components/Clock";
import Tfilot from "../components/Tfilot";
import TodayDate from "../components/TodayDate";
import Zmanum from "../components/Zmanim";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <header>
        <h1>
          בית הכנסת <strong>'סטאלין קארלין'</strong> גן הדסים
        </h1>
      </header>
      <Clock />
      <TodayDate />
      <Tfilot />
      <Zmanum />
      {/* <ZmanimTable /> */}
      {/* <ParnesPlace parnesList={props.parnesList} /> */}
    </>
  );
}
