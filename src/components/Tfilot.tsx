import { useZmanimToday } from "../hooks/useZmanimToday";
import { formatTime } from "../utils/formatTime";
import "../styles/Tfilot.css";

export default function Tfilot() {
  const { data, isLoading, error } = useZmanimToday();

  if (isLoading) return <div>טוען…</div>;
  if (error || !data) return <div>שגיאה</div>;

  const sunset = data.sunset;

  return (
    <section id="Tfilot">
      <h2>זמני התפילות</h2>
      <ul dir="rtl">
        <li>
          <strong>שחרית:</strong>
          <p>8:30</p>
        </li>

        <li>
          <strong>מנחה:</strong>{" "}
          <p>{formatTime(sunset as string, "minus", 10)}</p>
        </li>

        <li>
          <strong>מעריב:</strong>{" "}
          <p>{formatTime(sunset as string, "plus", 30)}</p>
        </li>
      </ul>
    </section>
  );
}
