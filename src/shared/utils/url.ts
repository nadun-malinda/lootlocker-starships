/**
 * Creates a full URL by combining a pathname with query string parameters.
 * It handles adding, updating, and removing query parameters (removes them if the value is `null` or `undefined`).
 *
 * @param {string} pathname - The base path for the URL (e.g., '/starships').
 * @param {Record<string, string | null | undefined>} searchParams - An object representing query parameters. Parameters with `null` or `undefined` values will be removed.
 * @returns {string} The full URL with the combined pathname and query string.
 */
export function createQueryStringWithPath(
  pathname: string,
  searchParams: Record<string, string | null | undefined>
): string {
  // Create a new URLSearchParams instance
  const params = new URLSearchParams();

  // Loop through the searchParams and add non-null/undefined values
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      params.set(key, value);
    }
  });

  // Construct the full URL by appending the query string to the pathname
  return `${pathname}?${params.toString()}`;
}
