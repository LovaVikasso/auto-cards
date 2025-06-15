'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import { Car } from '@/types';
import { useCallback, useState, memo } from 'react';
import { CarDetails } from '@/components/CarDetails';
import { ImageCarousel } from './ImageCarousel';

interface Props {
  car: Car;
}

const formatPrice = (price: number) => price.toLocaleString('ru-RU');
const formatRun = (run: number) => run.toLocaleString('ru-RU');

const CarInfo = memo(({ car }: { car: Car }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="body2" color="text.secondary">
      Двигатель:{' '}
      <Box component="span" sx={{ color: 'text.primary' }}>
        {car.engine_volume}cc, {car.engine_power}
      </Box>
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Цвет:{' '}
      <Box component="span" sx={{ color: 'text.primary' }}>
        {car.color}
      </Box>
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Состояние:{' '}
      <Box component="span" sx={{ color: 'text.primary' }}>
        {car.state}
      </Box>
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Владельцев:{' '}
      <Box component="span" sx={{ color: 'text.primary' }}>
        {car.owners_number}
      </Box>
    </Typography>
  </Box>
));

CarInfo.displayName = 'CarInfo';

export const CardItem = memo(({ car }: Props) => {
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const [open, setOpen] = useState(false);

  const carTitle = `${car.mark_cyrillic_name} ${car.model_cyrillic_name}`;
  const hasImages = car.images?.image?.length > 0;

  return (
    <>
      <Card
        sx={{ height: '100%' }}
        variant="outlined"
        role="article"
        aria-label={`Карточка автомобиля ${carTitle}`}
      >
        <CardContent>
          {hasImages && (
            <ImageCarousel images={car.images.image} alt={carTitle} />
          )}

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            aria-label="Название автомобиля"
          >
            {carTitle}
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h6"
              color="primary"
              aria-label={`Цена: ${formatPrice(car.price)} рублей`}
            >
              {formatPrice(car.price)} ₽
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}
            role="list"
            aria-label="Характеристики автомобиля"
          >
            <Chip
              label={`${car.year} год`}
              size="small"
              disabled
              role="listitem"
            />
            <Chip
              label={`${formatRun(car.run)} км`}
              size="small"
              disabled
              role="listitem"
            />
            <Chip label={car.gearbox} size="small" disabled role="listitem" />
          </Stack>

          <CarInfo car={car} />

          <Button
            variant="outlined"
            onClick={handleOpen}
            aria-label="Открыть подробную информацию"
          >
            Подробнее
          </Button>
        </CardContent>
      </Card>

      <CarDetails car={car} open={open} onClose={handleClose} />
    </>
  );
});

CardItem.displayName = 'CardItem';
