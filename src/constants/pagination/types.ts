export type Pagination =
  | Partial<{
      limit: number;
      page: number;
    }>
  | undefined;
