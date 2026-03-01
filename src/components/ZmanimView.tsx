import { zmanimLabels } from "../constants/zmanimLabels";
import { useZmanimToday } from "../hooks/useZmanimToday";

export default function ZmanimView() {
  const { data, isLoading, error } = useZmanimToday();

  if (isLoading) return <div>טוען…</div>;
  if (error || !data) return <div>שגיאה</div>;

  return (
    <ul dir="rtl">
      {Object.entries(data).map(([key, value]) => (
        <li key={key}>
          <strong>{zmanimLabels[key] ?? key}:</strong>{" "}
          {formatTime(value as string)}
        </li>
      ))}
    </ul>
  );
}

const formatTime = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleTimeString("he-IL", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};
