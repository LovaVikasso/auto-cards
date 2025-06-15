import { Container, Skeleton, Box } from '@mui/material';

export default function Loading() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Skeleton variant="rectangular" width={200} height={56} />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          gap: 2,
        }}
      >
        {[...Array(8)].map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            height={500}
            sx={{ borderRadius: 1 }}
          />
        ))}
      </Box>
    </Container>
  );
}
