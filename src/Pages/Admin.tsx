import type { Dispatch, SetStateAction } from "react";
import AdminParnes from "../components/AdminParnes";
import type { ParnesType } from "../types/parnesType";

export default function Admin(props: {
  setParnesList: Dispatch<SetStateAction<ParnesType[]>>;
}) {
  return (
    <>
      <AdminParnes setParnesList={props.setParnesList} />
    </>
  );
}
