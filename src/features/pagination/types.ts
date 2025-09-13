export interface PaginatedResponse<T> {
  meta: {
    total: number;
    current: number;
    limit: number;
  };
  data: T[];
}
// TODO уже не надо
export type Pagination =
  | Partial<{
      limit: number;
      page: number;
    }>
  | undefined;
