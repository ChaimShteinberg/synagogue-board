import { useZmanimToday } from "../hooks/useZmanimToday";
import { formatTime } from "../utils/formatTime";
import "../styles/zmanim.css";

export default function Zmanum() {
  const { data, isLoading, error } = useZmanimToday();

  if (isLoading) return <div>טוען…</div>;
  if (error || !data) return <div>שגיאה</div>;

  const sunset = data.sunset;

  return (
    <section id="zmanim">
      <h2>זמני היום</h2>
      <ul dir="rtl">
        <li>
          <strong>הנץ החמה:</strong> <p>{formatTime(data.sunrise as string)}</p>
        </li>
        <li>
          <strong>סו"ז ק"ש מג"א:</strong>
          <p>{formatTime(sunset as string)}</p>
        </li>
        <li>
          <strong>סו"ז ק"ש שו"ע הרב:</strong>
          <p>{formatTime(sunset as string)}</p>
        </li>
        <li>
          <strong>סו"ז תפילה מג"א:</strong>
          <p>{formatTime(sunset as string)}</p>
        </li>
        <li>
          <strong>סו"ז תפילה שו"ע הרב:</strong>
          <p>{formatTime(sunset as string)}</p>
        </li>
        <li>
          <strong>חצות:</strong> <p>{formatTime(sunset as string)}</p>
        </li>
        <li>
          <strong>מנחה גדולה:</strong> <p>{formatTime(sunset as string)}</p>
        </li>
        <li>
          <strong>שקיעת החמה:</strong> <p>{formatTime(sunset as string)}</p>
        </li>
      </ul>
    </section>
  );
}
