'use client';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { SortOrder, SORT_ORDERS } from '@/api/constants';
import { useCallback, useMemo, useState } from 'react';

interface Props {
  onSortChangeAction: (order: SortOrder) => void;
}

const SORT_OPTIONS = [
  { value: SORT_ORDERS.NONE, label: 'Без сортировки' },
  { value: SORT_ORDERS.ASC, label: 'По возрастанию' },
  { value: SORT_ORDERS.DESC, label: 'По убыванию' },
] as const;

export const SortSelect = ({ onSortChangeAction }: Props) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>(SORT_ORDERS.NONE);

  const handleChange = useCallback(
    (event: SelectChangeEvent<SortOrder>) => {
      const value = event.target.value as SortOrder;
      setSortOrder(value);
      onSortChangeAction(value);
    },
    [onSortChangeAction]
  );

  const menuItems = useMemo(
    () =>
      SORT_OPTIONS.map(({ value, label }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      )),
    []
  );

  return (
    <FormControl
      sx={{
        minWidth: 200,
        backgroundColor: 'background.paper',
        borderRadius: 1,
      }}
      aria-label="Выберите порядок сортировки"
    >
      <InputLabel id="sort-select-label">Сортировка</InputLabel>
      <Select
        labelId="sort-select-label"
        id="sort-select"
        label="Сортировка"
        value={sortOrder}
        onChange={handleChange}
        aria-describedby="sort-select-description"
      >
        {menuItems}
      </Select>
    </FormControl>
  );
};
