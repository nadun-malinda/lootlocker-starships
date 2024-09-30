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
    const limit = parseInt(searchParams.get("limit") || STARSHIP_RESULT_LIMIT);

    // Calculate the updated page number based on the direction
    const updatedPage = direction === "next" ? page + 1 : page - 1;

    // Construct the new URL with updated page and limit
    router.push(
      createQueryStringWithPath(pathname, {
        page: updatedPage.toString(),
        limit: limit.toString(),
      })
    );
  };

  return (
    <div className="inline-flex gap-1 mt-8">
      <Button onClick={() => handlePagination("previous")} disabled={!previous}>
        Previous
      </Button>
      <Button onClick={() => handlePagination("next")} disabled={!next}>
        Next
      </Button>
    </div>
  );
}
