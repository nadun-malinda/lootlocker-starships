/**
 * ErrorMessage component to display error messages to the user.
 *
 * @param {Object} props - The props for the ErrorMessage component.
 * @param {string} [props.message] - An optional custom error message.
 * @param {Error} [props.error] - An optional Error object to extract the message from.
 * @returns {JSX.Element} The rendered ErrorMessage component.
 */
export function ErrorMessage({
  message,
  error,
}: {
  message?: string;
  error?: Error;
}): JSX.Element {
  return (
    <div className="flex">
      <h2 className="text-md text-white mb-8">
        {message || error?.message || "An unexpected error occurred."}
      </h2>
    </div>
  );
}
