import type { ParnesType } from "../types/parnesType";
import Parnes from "./Parnes";

export default function ParnesPlace(props: { parnesList: ParnesType[] }) {
  return (
    <>
      {props.parnesList.map((parnes: ParnesType, index: number) => (
        <Parnes
          key={index}
          title={parnes.title}
          name={parnes.name}
          text={parnes.text}
        />
      ))}
    </>
  );
}
