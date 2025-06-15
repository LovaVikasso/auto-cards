'use client';

import { Car } from '@/types';
import { CardItem } from '@/components/CardItem';
import { Container, Grid, Box } from '@mui/material';
import { SortSelect } from '@/components/SortSelect';
import { SortOrder } from '@/api/constants';
import { useState } from 'react';
import { carsApi } from '@/api/cars';
import { Pagination } from './Pagination';

interface Props {
  initialCars: Car[];
  totalItems: number;
}

export const List = ({ initialCars, totalItems }: Props) => {
  const [cars, setCars] = useState(initialCars);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSortChange = async (order: SortOrder) => {
    const data = await carsApi.getCars({
      page: currentPage,
      sort: 'price',
      order,
    });
    setCars(data.data);
  };

  const handlePageChange = async (page: number) => {
    setCurrentPage(page);
    const data = await carsApi.getCars({ page });
    setCars(data.data);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        maxHeight: '100vh',
        pb: 0,
        px: 0,
      }}
    >
      <Box sx={{ mb: 3, px: 2 }}>
        <SortSelect onSortChangeAction={handleSortChange} />
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          mb: 1,
        }}
      >
        <Grid container spacing={2}>
          {cars.map((car: Car) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={car.vin}>
              <CardItem car={car} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          position: 'sticky',
          bottom: 0,
          backgroundColor: 'background.paper',
          py: 1,
        }}
      >
        <Pagination
          totalItems={totalItems}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Box>
    </Container>
  );
};
