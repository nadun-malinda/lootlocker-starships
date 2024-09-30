import { type StarshipResult } from "@/shared/data/schema";
import { Button } from "@/shared/ui/button/Button";

interface StarshipListProps {
  starships: StarshipResult[];
}

export function StarshipList({ starships }: StarshipListProps) {
  return (
    <div>
      <ul>
        {starships.map((starship, index) => (
          <li key={index} className="mb-3 last:mb-0">
            <div>
              <p>
                <span className="font-bold">Name:</span> {starship.name}
              </p>
              <p>
                <span className="font-bold">Manufacturer:</span>
                {starship.manufacturer}
              </p>
              <p>
                <span className="font-bold">Crew size:</span> {starship.crew}
              </p>
              <p>
                <span className="font-bold">Created Date:</span>
                {new Date(starship.created).toLocaleString()}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="inline-flex gap-1">
        <Button disabled>Previous</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
}
