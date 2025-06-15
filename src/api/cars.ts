import {
  DEFAULT_PAGE_SIZE,
  SortField,
  SortOrder,
  SORT_ORDERS,
} from './constants';
import { Car } from '@/types';

export interface CarResponse {
  data: Car[];
  total: number;
}

interface GetCarsParams {
  page?: number;
  sort?: SortField;
  order?: SortOrder;
}

export const carsApi = {
  getCars: async ({
    page = 1,
    sort,
    order,
  }: GetCarsParams = {}): Promise<CarResponse> => {
    const params = new URLSearchParams({
      _limit: DEFAULT_PAGE_SIZE.toString(),
      _page: page.toString(),
    });

    if (sort) {
      params.append('_sort', sort);
      params.append('_order', order === SORT_ORDERS.NONE ? '' : order || 'asc');
    }

    const response = await fetch(
      `https://testing-api.ru-rating.ru/cars?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch cars');
    }
    return response.json();
  },
};
