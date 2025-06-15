'use client';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { SortOrder } from '@/api/constants';
import { useState } from 'react';

interface Props {
  onSortChangeAction: (order: SortOrder) => void;
}

export const SortSelect = ({ onSortChangeAction }: Props) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>('none');

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as SortOrder;
    setSortOrder(value);
    onSortChangeAction(value);
  };

  return (
    <FormControl
      sx={{
        minWidth: 200,
        backgroundColor: 'background.paper',
        borderRadius: 1,
      }}
    >
      <InputLabel id="sort-select-label">Сортировка</InputLabel>
      <Select
        labelId="sort-select-label"
        id="sort-select"
        label="Сортировка"
        value={sortOrder}
        onChange={handleChange}
      >
        <MenuItem value="none">Без сортировки</MenuItem>
        <MenuItem value="asc">По возрастанию</MenuItem>
        <MenuItem value="desc">По убыванию</MenuItem>
      </Select>
    </FormControl>
  );
};
