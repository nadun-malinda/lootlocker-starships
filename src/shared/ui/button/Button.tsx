interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode | string;
}

export function Button({ disabled, children }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center disabled:opacity-50"
    >
      {children}
    </button>
  );
}
