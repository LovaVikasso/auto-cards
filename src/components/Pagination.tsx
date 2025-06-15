import { Pagination as MuiPagination, Box } from '@mui/material';
import { DEFAULT_PAGE_SIZE } from '@/api/constants';

interface Props {
  totalItems: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  totalItems,
  currentPage,
  onPageChange,
}: Props) => {
  const totalPages = Math.ceil(totalItems / DEFAULT_PAGE_SIZE);

  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  if (totalPages <= 1) return null;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 2 }}>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
      />
    </Box>
  );
};
