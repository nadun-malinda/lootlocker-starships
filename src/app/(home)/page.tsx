import { fetchStarships } from "@/shared/data/fetchStarships";

export default async function Home() {
  const starships = await fetchStarships();

  if (starships instanceof Error) {
    return <>Soemthing went wrong!</>;
  }

  if (starships.count === 0 || starships.results.length === 0) {
    return <>No starships!</>;
  }

  return (
    <ul>
      {starships.results.map((starship, index) => (
        <li key={index} className="mb-3 last:mb-0">
          <div>
            <p>
              <span className="font-bold">Name:</span> {starship.name}
            </p>
            <p>
              <span className="font-bold">Manufacturer:</span>{" "}
              {starship.manufacturer}
            </p>
            <p>
              <span className="font-bold">Crew size:</span> {starship.crew}
            </p>
            <p>
              <span className="font-bold">Created Date:</span>{" "}
              {new Date(starship.created).toLocaleString()}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
