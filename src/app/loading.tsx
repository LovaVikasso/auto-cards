import {
  Container,
  Skeleton,
  Box,
  Card,
  CardContent,
  Stack,
} from '@mui/material';

const CardSkeleton = () => (
  <Card sx={{ height: '100%' }} variant="outlined">
    <CardContent>
      <Skeleton
        variant="rectangular"
        height={200}
        sx={{ mb: 2, borderRadius: 1 }}
      />

      <Skeleton variant="text" width="80%" height={32} sx={{ mb: 2 }} />

      <Skeleton variant="text" width="40%" height={28} sx={{ mb: 2 }} />

      <Stack
        direction="row"
        spacing={1}
        sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}
      >
        <Skeleton variant="rounded" width={80} height={24} />
        <Skeleton variant="rounded" width={100} height={24} />
        <Skeleton variant="rounded" width={90} height={24} />
      </Stack>

      <Box sx={{ mb: 2 }}>
        <Skeleton variant="text" width="70%" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="60%" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="65%" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="55%" height={20} sx={{ mb: 1 }} />
      </Box>

      <Skeleton variant="rectangular" width={120} height={36} />
    </CardContent>
  </Card>
);

export default function Loading() {
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
      <Box sx={{ mb: 3, px: 2, display: 'flex', justifyContent: 'center' }}>
        <Skeleton variant="rectangular" width={200} height={56} />
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          mb: 1,
        }}
      >
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
            px: 2,
          }}
        >
          {[...Array(8)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          position: 'sticky',
          bottom: 0,
          backgroundColor: 'background.paper',
          py: 1,
        }}
      >
        <Skeleton
          variant="rectangular"
          width={300}
          height={48}
          sx={{ mx: 'auto' }}
        />
      </Box>
    </Container>
  );
}
