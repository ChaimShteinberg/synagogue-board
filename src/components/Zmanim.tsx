import { useZmanimToday } from "../hooks/useZmanim";
import "../styles/zmanim.css";
import { formatTime } from "../utils/formatTime";

export default function Zmanim() {
  const { data, isLoading, error } = useZmanimToday();

  if (isLoading) return <div>טוען…</div>;
  if (error || !data) return <div>שגיאה</div>;

  return (
    <section id="zmanim">
      <h2>זמני היום</h2>
      <ul dir="rtl">
        <li>
          <strong>זריחה:</strong> <p>{formatTime(data.sunrise as string)}</p>
        </li>
        <li>
          <strong>סוזק"ש א':</strong>
          <p>{formatTime(data.sofZmanShmaMGA19Point8 as string)}</p>
        </li>
        <li>
          <strong>סוזק"ש 2:</strong>
          <p>{formatTime(data.sofZmanShma as string)}</p>
        </li>
        <li>
          <strong>סוז"ת 1:</strong>
          <p>{formatTime(data.sofZmanTfillaMGA19Point8 as string)}</p>
        </li>
        <li>
          <strong>סוז"ת 2:</strong>
          <p>{formatTime(data.sofZmanTfilla as string)}</p>
        </li>
        <li>
          <strong>חצות:</strong> <p>{formatTime(data.chatzot as string)}</p>
        </li>
        <li>
          <strong>מנחה גדולה:</strong>{" "}
          <p>{formatTime(data.minchaGedola as string)}</p>
        </li>
        <li>
          <strong>שקיעה:</strong>{" "}
          <p>{formatTime(data.sunset as string)}</p>
        </li>
      </ul>
    </section>
  );
}
