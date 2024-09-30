/**
 * Generic type representing a successful HTTP fetch response.
 *
 * @template T
 */
type FetchHttpSuccess<T = unknown> = T;

/**
 * Performs an HTTP fetch request and returns either the parsed JSON response
 * or an error if the request fails.
 *
 * @template T
 * @param {RequestInfo | URL} input - The resource to fetch, which can be a URL string or a Request object.
 * @param {RequestInit} [init] - An optional configuration object for the request.
 * @returns {Promise<FetchHttpSuccess<T> | Error>} A promise that resolves to the parsed JSON data on success, or an error on failure.
 *
 * @throws {Error} Throws an error if the network request fails or if the response is not OK.
 */
export async function fetchHttp<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<FetchHttpSuccess<T> | Error> {
  try {
    const baseUrl = process.env.SWAPI_BASE_URL;
    const url = `${baseUrl}/${input}`;
    const response = await fetch(url, init);

    if (!response.ok) {
      return new Error("Error while fetching data");
    }

    // If successful, parse and return the JSON
    return (await response.json()) as T;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error;
    }

    return new Error("Error while fetching data");
  }
}
