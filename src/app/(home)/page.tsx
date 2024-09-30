import { fetchStarships } from "@/shared/data/fetchStarships";
import { StarshipList } from "../components/starships/StarshipList";

export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { page: string; limit: string };
}) {
  console.log(">>> params: ", params);
  console.log(">>> searchParams: ", searchParams);

  const starships = await fetchStarships();

  if (starships instanceof Error) {
    return <>Soemthing went wrong!</>;
  }

  if (starships.count === 0 || starships.results.length === 0) {
    return <>No starships!</>;
  }

  return <StarshipList starships={starships.results} />;
}
