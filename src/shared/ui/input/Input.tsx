interface InputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}

export function Input({ placeholder, onChange, value }: InputProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full lg:w-auto rounded border border-gray-600 bg-black/50 py-2 pl-4 pr-12 focus:outline-none focus:ring-2 ring-gray-600 text-md text-white"
    />
  );
}
