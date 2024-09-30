"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/shared/ui/input/Input";
import { createQueryStringWithPath } from "@/shared/utils/url";
import { useDebouncedCallback } from "@/shared/hooks/useDebouncedCallback";
import {
  FIRST_PAGE_NUMBER,
  STARSHIP_RESULT_LIMIT,
} from "@/shared/const/constants";

export function Search() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get("search") || ""
  );

  const debouncedCallback = useDebouncedCallback(
    ({ text }: { text: string }) => setSearch({ text }),
    300
  );

  const setSearch = ({ text }: { text: string }) => {
    const url = createQueryStringWithPath(pathname, {
      page: FIRST_PAGE_NUMBER,
      limit: STARSHIP_RESULT_LIMIT,
      search: text || null, // Pass `null` to remove "search" if text is empty
    });

    replace(url);
  };

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;

    setSearchText(text);
    debouncedCallback({ text });
  };

  return (
    <div className="mb-4">
      <Input
        value={searchText}
        placeholder="Search your starship..."
        onChange={handleSearchText}
      />
    </div>
  );
}
