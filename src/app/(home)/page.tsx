import { Suspense } from "react";

import { Await } from "@/app/components/await/Await";
import { Search } from "@/app/components/search/Search";
import { Loading } from "@/app/components/loading/Loading";
import { Paginate } from "@/app/components/paginate/Paginate";
import { ErrorMessage } from "@/app/components/error/ErrorMessage";
import { StarshipList } from "@/app/components/starships/StarshipList";

import { fetchStarships } from "@/shared/data/fetchStarships";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string; limit: string };
}) {
  const promise = fetchStarships({ searchParams });

  return (
    <>
      <Suspense>
        <Search />
      </Suspense>

      <Suspense fallback={<Loading />}>
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
    </>
  );
}
