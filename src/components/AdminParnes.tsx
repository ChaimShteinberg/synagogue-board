import {
  useState,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";
import type { ParnesType } from "../types/parnesType";

export default function AdminParnes(props: {
  setParnesList: Dispatch<SetStateAction<ParnesType[]>>;
}) {
  const [title, setTitle] = useState("פרנס");
  const [name, setName] = useState("החפץ בעילום שמו");
  const [text, setText] = useState(
    "לברכה והצלחה בכל העניינים ברוחניות ובגשמיות"
  );

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    props.setParnesList((prev: ParnesType[]) => [
      ...prev,
      { title, name, text },
    ]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit">הוסף</button>
      </form>
    </>
  );
}
