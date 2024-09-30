import { fetchHttp } from "../utils/fetchHttp";
import { StarshipResult } from "./schema";

export async function fetchStarship({
  id,
}: {
  id: string;
}): Promise<StarshipResult | Error> {
  return await fetchHttp<StarshipResult>(`/starships/${id}`);
}
