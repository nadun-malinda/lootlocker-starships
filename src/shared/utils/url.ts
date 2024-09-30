/**
 * Creates a full URL by combining a pathname with query string parameters.
 *
 * @param {string} pathname - The base path for the URL (e.g., '/starships').
 * @param {Record<string, string>} searchParams - An object representing query parameters.
 * @returns {string} The full URL with the combined pathname and query string.
 */
export function createQueryStringWithPath(
  pathname: string,
  searchParams: Record<string, string>
): string {
  // Create a new URLSearchParams instance with the provided search parameters
  const params = new URLSearchParams(searchParams);

  // Construct the full URL by appending the query string to the pathname
  return `${pathname}?${params.toString()}`;
}
