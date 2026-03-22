import { useZmanimToday } from "../hooks/useZmanimToday";
import "../styles/zmanim.css";
import { formatTime } from "../utils/formatTime";

export default function Zmanum() {
  const { data, isLoading, error } = useZmanimToday();

  if (isLoading) return <div>טוען…</div>;
  if (error || !data) return <div>שגיאה</div>;

  return (
    <section id="zmanim">
      <h2>זמני היום</h2>
      <ul dir="rtl">
        <li>
          <strong>הנץ החמה:</strong> <p>{formatTime(data.sunrise as string)}</p>
        </li>
        <li>
          <strong>סו"ז ק"ש מג"א:</strong>
          <p>{formatTime(data.sofZmanShmaMGA19Point8 as string)}</p>
        </li>
        <li>
          <strong>סו"ז ק"ש שו"ע הרב:</strong>
          <p>{formatTime(data.sofZmanShma as string)}</p>
        </li>
        <li>
          <strong>סו"ז תפילה מג"א:</strong>
          <p>{formatTime(data.sofZmanTfillaMGA19Point8 as string)}</p>
        </li>
        <li>
          <strong>סו"ז תפילה שו"ע הרב:</strong>
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
          <strong>שקיעת החמה:</strong>{" "}
          <p>{formatTime(data.sunset as string)}</p>
        </li>
      </ul>
    </section>
  );
}
