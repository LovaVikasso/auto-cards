import { carsApi } from '@/api/cars';
import { Container } from '@mui/material';
import { List } from '@/components/List';

export default async function Home() {
  const data = await carsApi.getCars();
  return (
    <Container maxWidth="xl">
      <main>
        <List initialCars={data.data} totalItems={data.meta.total} />
      </main>
    </Container>
  );
}
