import { type StarshipResult } from "@/shared/data/schema";

interface StarshipListProps {
  starships: StarshipResult[];
}

export function StarshipList({ starships }: StarshipListProps) {
  if (starships.length === 0) {
    return <div className="my-8 text-base">No starships found!</div>;
  }

  return (
    <ul className="my-8">
      {starships.map((starship, index) => (
        <li
          key={index}
          className="mb-4 border-b border-gray-600 pb-4 last:pb-0 last:border-none last:mb-0"
        >
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
        </li>
      ))}
    </ul>
  );
}
