import { Car } from './car';

export interface Meta {
  limit: number;
  page: number;
  total_no_filters: number;
  count: number;
  total: number;
  last_page: number;
  first_page_link: string;
  next_page_link: string;
  last_page_link: string;
  from: number;
  to: number;
}

export interface CarResponse {
  data: Car[];
  meta: Meta;
}
