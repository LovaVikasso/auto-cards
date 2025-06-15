import { NextRequest, NextResponse } from 'next/server';
import {
  DEFAULT_PAGE_SIZE,
  SortField,
  SortOrder,
  SORT_ORDERS,
} from '@/api/constants';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page') || '1';
    const sort = searchParams.get('sort') as SortField | null;
    const order = searchParams.get('order') as SortOrder | null;

    const params = new URLSearchParams({
      _limit: DEFAULT_PAGE_SIZE.toString(),
      _page: page,
    });

    if (sort) {
      params.append('_sort', sort);
      params.append('_order', order === SORT_ORDERS.NONE ? '' : order || 'asc');
    }

    const url = `https://testing-api.ru-rating.ru/cars?${params.toString()}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch cars');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching cars:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cars' },
      { status: 500 }
    );
  }
}
