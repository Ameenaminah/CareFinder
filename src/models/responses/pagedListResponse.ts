export interface PagedListResponse<T> {
  items: T[];
  startIndex: number;
  pageSize: number;
  pageNumber: number;
}
