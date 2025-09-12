import { useState, useCallback } from 'react';

interface UsePaginationProps {
  defaultLimit?: number;
  defaultPage?: number;
}

export interface PaginateHookReturn {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function usePagination({
  defaultLimit = 10,
  defaultPage = 1,
}: UsePaginationProps = {}): PaginateHookReturn {
  const [currentPage, setPage] = useState(defaultPage);
  const [totalPages] = useState(defaultLimit);

  const onPageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  return {
    currentPage,
    totalPages,
    onPageChange,
  };
}
