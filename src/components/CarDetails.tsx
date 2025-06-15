import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { Car } from '@/types';

interface Props {
  car: Car;
  open: boolean;
  onClose: () => void;
}

export const CarDetails = ({ car, open, onClose }: Props) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        Комплектация {car.mark_cyrillic_name} {car.model_cyrillic_name}
      </DialogTitle>
      <DialogContent>
        {car.extras ? (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 2,
              mt: 1,
            }}
          >
            {car.extras.split(', ').map((extra, index) => (
              <Box key={index}>
                <Typography variant="body2">• {extra}</Typography>
              </Box>
            ))}
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '200px',
            }}
          >
            <Typography variant="body1" color="text.secondary">
              Подробности о комплектации отсутствуют
            </Typography>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Закрыть</Button>
      </DialogActions>
    </Dialog>
  );
};
