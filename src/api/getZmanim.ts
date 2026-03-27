import axios from "axios";

type ZmanimResponse = {
  times: Record<string, string>;
};

export async function fetchZmanim(date: Date): Promise<Record<string, string>> {
  const today = date.toISOString().split("T")[0];

  const { data } = await axios.get<ZmanimResponse>(
    "https://www.hebcal.com/zmanim",
    {
      params: {
        cfg: "json",
        latitude: 31.93,
        longitude: 35.04,
        tzid: "Asia/Jerusalem",
        ue: "on",
        elev: 300,
        sec: 1,
        date: today,
      },
    },
  );

  return data.times;
}
