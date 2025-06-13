import { useState, useEffect, useCallback, useRef } from "react";
import { fetchMockDataPage } from "@/data/mockDataPaginated";
import type { User } from "@/types";

const PAGE_SIZE = 50;

export const useUsersTable = () => {
  const [data, setData] = useState<User[] | null>(null);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const fetchPage = useCallback(async (pageToFetch: number) => {
    setIsLoading(true);
    const result = await fetchMockDataPage(pageToFetch, PAGE_SIZE);
    setData((prev) => (prev ? [...prev, ...result.data] : [...result.data]));
    setIsLoading(false);
    setHasMore(result.data.length === PAGE_SIZE);
    setPage(pageToFetch);
  }, []);

  useEffect(() => {
    setData(null);
    setPage(0);
    setHasMore(true);
    fetchPage(0);
  }, [fetchPage]);

  const fetchMoreUsers = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;

      if (
        scrollHeight - scrollTop - clientHeight < 200 &&
        !isLoading &&
        hasMore
      ) {
        fetchPage(page + 1);
      }
    },
    [fetchPage, isLoading, hasMore, page]
  );

  return { data, isLoading, tableContainerRef, fetchMoreUsers };
};
