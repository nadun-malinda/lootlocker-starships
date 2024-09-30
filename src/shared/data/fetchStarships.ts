import { FIRST_PAGE_NUMBER, STARSHIP_RESULT_LIMIT } from "../const/constants";
import { fetchHttp } from "../utils/fetchHttp";
import { createQueryStringWithPath } from "../utils/url";
import { type StarshipsResponse } from "./schema";

/**
 * Fetches starship data from the API with specified pagination parameters.
 *
 * @param {Object} params - The parameters for fetching starships.
 * @param {Object} params.searchParams - The search parameters for pagination.
 * @param {string} params.searchParams.page - The current page number (as a string).
 * @param {string} params.searchParams.limit - The limit of results per page (as a string).
 * @returns {Promise<StarshipsResponse | Error>} A promise that resolves to the starships response or an error.
 */
export async function fetchStarships({
  searchParams,
}: {
  searchParams: { page: string; limit: string };
}): Promise<StarshipsResponse | Error> {
  // Default to FIRST_PAGE_NUMBER and STARSHIP_RESULT_LIMIT if not provided
  const updatedSearchParams = {
    ...searchParams,
    page: searchParams.page || FIRST_PAGE_NUMBER,
    limit: searchParams.limit || STARSHIP_RESULT_LIMIT,
  };

  const url = createQueryStringWithPath("/starships", updatedSearchParams);
  const starships = await fetchHttp<StarshipsResponse>(url);

  // Return early if an error occurred during the fetch
  if (starships instanceof Error) {
    return starships;
  }

  // Slice results to ensure we only return the specified limit
  return {
    ...starships,
    results: starships.results.slice(
      0,
      parseInt(updatedSearchParams.limit, 10)
    ),
  };
}
