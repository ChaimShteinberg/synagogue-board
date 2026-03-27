import { useZmanimToday } from "../hooks/useZmanim";
// import { formatTime } from "../utils/formatTime";
import "../styles/Tfilot.css";

export default function Tfilot() {
  const { data, isLoading, error } = useZmanimToday();

  if (isLoading) return <div>טוען…</div>;
  if (error || !data) return <div>שגיאה</div>;

  // const sunset = data.sunset;

  return (
    <section id="Tfilot">
      <h2>זמני התפילות</h2>
      <ul dir="rtl">
        {/* <li>
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
        </li> */}

        <li>
          <strong>מנחה ערב שב"ק:</strong>
          <p>6:44</p>
        </li>

        <li>
          <strong>שבת אחים:</strong>{" "}
          <p>9:30</p>
        </li>

        <li>
          <strong>חברת משכימי קום:</strong>{" "}
          <p>7:30</p>
        </li>

        <li>
          <strong>שחרית:</strong>
          <p>8:00</p>
        </li>

        <li>
          <strong>אבות ובנים:</strong>{" "}
          <p>אחרי קידושא רבא</p>
        </li>

        <li>
          <strong>תהילים:</strong>{" "}
          <p>5:00</p>
        </li>

        <li>
          <strong>דרשת שבת הגדול:</strong>
          <p>5:30</p>
        </li>

        <li>
          <strong>מנחה שב"ק:</strong>{" "}
          <p>6:29</p>
        </li>
      </ul>
    </section>
  );
}
