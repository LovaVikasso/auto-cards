import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
  Skeleton,
} from '@mui/material';
import { Car } from '@/types';
import Image from 'next/image';
import { useState } from 'react';
import { CarDetails } from '@/components/CarDetails';

interface Props {
  car: Car;
}

export const CardItem = ({ car }: Props) => {
  const [open, setOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ height: '100%' }}>
        <CardContent>
          {car.images && car.images.image.length > 0 && (
            <Box
              sx={{
                mb: 2,
                position: 'relative',
                width: '100%',
                height: { xs: '200px', sm: '250px', md: '300px' },
                backgroundColor: 'grey.100',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              {imageLoading && (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height="100%"
                  animation="wave"
                />
              )}
              <Image
                src={car.images.image[0]}
                alt={`${car.mark_cyrillic_name} ${car.model_cyrillic_name}`}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw"
                style={{
                  objectFit: 'cover',
                  borderRadius: '4px',
                  opacity: imageLoading ? 0 : 1,
                  transition: 'opacity 0.3s ease-in-out',
                }}
                onLoadingComplete={() => setImageLoading(false)}
                priority
              />
            </Box>
          )}

          <Typography variant="h5" component="div" gutterBottom>
            {car.mark_cyrillic_name} {car.model_cyrillic_name}
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" color="primary">
              {car.price.toLocaleString('ru-RU')} ₽
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}
          >
            <Chip label={`${car.year} год`} size="small" disabled />
            <Chip
              label={`${car.run.toLocaleString()} км`}
              size="small"
              disabled
            />
            <Chip label={car.gearbox} size="small" disabled />
          </Stack>

          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Двигатель: {car.engine_volume}cc, {car.engine_power}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Цвет: {car.color}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Состояние: {car.state}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Владельцев: {car.owners_number}
            </Typography>
          </Box>
          <Button variant="outlined" onClick={handleOpen}>
            Подробнее
          </Button>
        </CardContent>
      </Card>

      <CarDetails car={car} open={open} onClose={handleClose} />
    </>
  );
};
