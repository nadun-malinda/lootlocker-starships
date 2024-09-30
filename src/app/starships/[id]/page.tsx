import { Suspense } from "react";

import { Await } from "@/app/components/await/Await";
import { Loading } from "@/app/components/loading/Loading";
import { ErrorMessage } from "@/app/components/error/ErrorMessage";

import { Button } from "@/shared/ui/button/Button";
import { fetchStarship } from "@/shared/data/fetchStarship";

export default function StarshipPage({ params }: { params: { id: string } }) {
  const promise = fetchStarship({ id: params.id });

  return (
    <div>
      <div className="mb-8">
        <Button href="/">{`< Back to home`}</Button>
      </div>

      <Suspense fallback={<Loading />}>
        <Await promise={promise}>
          {(starship) =>
            starship instanceof Error ? (
              <ErrorMessage error={starship} />
            ) : (
              <div>
                <p>
                  <span className="font-bold">Name: </span>
                  {starship.name}
                </p>
                <p>
                  <span className="font-bold">Manufacturer: </span>
                  {starship.manufacturer}
                </p>
                <p>
                  <span className="font-bold">Crew size:</span> {starship.crew}
                </p>
                <p>
                  <span className="font-bold">Created Date: </span>
                  {new Date(starship.created).toLocaleString()}
                </p>
              </div>
            )
          }
        </Await>
      </Suspense>
    </div>
  );
}
