import { fetchHttp } from "../utils/fetchHttp";
import { StarshipsResponse } from "./schema";

export async function fetchStarships() {
  return await fetchHttp<StarshipsResponse>("/starships");
}
