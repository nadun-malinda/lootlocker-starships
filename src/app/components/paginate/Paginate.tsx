"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Button } from "@/shared/ui/button/Button";
import { createQueryStringWithPath } from "@/shared/utils/url";
import {
  FIRST_PAGE_NUMBER,
  STARSHIP_RESULT_LIMIT,
} from "@/shared/const/constants";

interface PaginateProps {
  next: string | null;
  previous: string | null;
}

/**
 * Pagination component for navigating through starship results.
 *
 * @param {PaginateProps} props - The pagination properties.
 * @param {string | null} props.next - The URL for the next page.
 * @param {string | null} props.previous - The URL for the previous page.
 */
export function Paginate({ next, previous }: PaginateProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePagination = (direction: "next" | "previous") => {
    const page = parseInt(searchParams.get("page") || FIRST_PAGE_NUMBER);
    const limit = searchParams.get("limit") || STARSHIP_RESULT_LIMIT;
    const search = searchParams.get("search") || "";

    // Calculate the updated page number based on the direction
    const updatedPage = direction === "next" ? page + 1 : page - 1;

    const url = createQueryStringWithPath(pathname, {
      page: updatedPage.toString(),
      limit,
      search: search || null, // Pass `null` to remove "search" if search text is empty
    });

    router.push(url);
  };

  return (
    <div className="inline-flex gap-1">
      <Button onClick={() => handlePagination("previous")} disabled={!previous}>
        Previous
      </Button>
      <Button onClick={() => handlePagination("next")} disabled={!next}>
        Next
      </Button>
    </div>
  );
}
