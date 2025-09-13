export interface GetList<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
  };
}

export type ListQuery = {
  limit?: number;
  page?: number;
  q?: string;
};
