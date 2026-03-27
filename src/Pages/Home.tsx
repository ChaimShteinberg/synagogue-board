import { useEffect } from "react";
import Clock from "../components/Clock";
import Tfilot from "../components/Tfilot";
import TodayDate from "../components/TodayDate";
import Zmanim from "../components/Zmanim";
import "../styles/home.css";

export default function Home() {
  useEffect(() => {
    const setupTwoAMRefresh = () => {
      const now: Date = new Date();
      const target: Date = new Date();

      target.setHours(2, 0, 0, 0);

      if (now > target) {
        target.setDate(target.getDate() + 1);
      }

      const msUntilTarget: number = target.getTime() - now.getTime();

      const timeoutId = setTimeout(() => {
        window.location.reload();
      }, msUntilTarget);
      return () => {
        clearTimeout(timeoutId);
      };
    };

    const cleanup = setupTwoAMRefresh();
    return cleanup;
  }, []);
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
      <Zmanim />
    </>
  );
}
