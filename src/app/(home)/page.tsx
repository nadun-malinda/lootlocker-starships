import { Suspense } from "react";
import { Await } from "../components/await/Await";
import { ErrorMessage } from "../components/error/Error";
import { Paginate } from "../components/paginate/Paginate";
import { StarshipList } from "../components/starships/StarshipList";

import { fetchStarships } from "@/shared/data/fetchStarships";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string; limit: string };
}) {
  const promise = fetchStarships({ searchParams });

  return (
    <Suspense fallback={<>Loading ...</>}>
      <Await promise={promise}>
        {(starships) =>
          starships instanceof Error ? (
            <ErrorMessage error={starships} />
          ) : (
            <>
              <StarshipList starships={starships.results} />
              <Paginate next={starships.next} previous={starships.previous} />
            </>
          )
        }
      </Await>
    </Suspense>
  );
}
