"use client";

import Link from "next/link";

interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode | string;
  onClick?: () => void;
  href?: string;
}

export function Button({ disabled, children, onClick, href }: ButtonProps) {
  const className =
    "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center";

  if (href) {
    return (
      <Link
        href={href}
        className={`${className} ${disabled && "opacity-50 cursor-default"}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${className} disabled:opacity-50`}
    >
      {children}
    </button>
  );
}
