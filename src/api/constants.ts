export const DEFAULT_PAGE_SIZE = 12;

export const SORT_ORDERS = {
  ASC: 'asc',
  DESC: 'desc',
  NONE: 'none',
} as const;

export type SortOrder = (typeof SORT_ORDERS)[keyof typeof SORT_ORDERS];

export const SORT_FIELDS = {
  PRICE: 'price',
} as const;

export type SortField = (typeof SORT_FIELDS)[keyof typeof SORT_FIELDS];

export const QUERY_PARAMS = {
  PAGE: 'page',
  SORT: 'sort',
  ORDER: 'order',
} as const;
