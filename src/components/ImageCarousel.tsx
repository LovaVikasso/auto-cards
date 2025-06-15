import { useState } from 'react';
import { Box, IconButton, Skeleton } from '@mui/material';
import Image from 'next/image';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export const ImageCarousel = ({ images, alt }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setImageLoading(true);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setImageLoading(true);
  };

  return (
    <Box
      sx={{
        mb: 2,
        position: 'relative',
        width: '100%',
        height: { xs: '200px', sm: '250px', md: '300px' },
        backgroundColor: 'grey.100',
        borderRadius: '4px',
        overflow: 'hidden',
        '& .navigation-buttons': {
          opacity: 0,
          transition: 'opacity 0.2s ease-in-out',
          '@media (max-width: 600px)': {
            opacity: 1,
          },
        },
        '&:hover .navigation-buttons': {
          opacity: 1,
        },
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
        src={images[currentIndex]}
        alt={alt}
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw"
        style={{
          objectFit: 'cover',
          borderRadius: '4px',
          opacity: imageLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}
        onLoad={() => setImageLoading(false)}
        priority={currentIndex === 0}
        loading={currentIndex === 0 ? 'eager' : 'lazy'}
        quality={85}
      />

      {images.length > 1 && (
        <Box className="navigation-buttons">
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255, 255, 255, 0.8)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              },
              width: '24px',
              height: '24px',
              '& .MuiSvgIcon-root': {
                fontSize: '0.8rem',
              },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255, 255, 255, 0.8)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              },
              width: '24px',
              height: '24px',
              '& .MuiSvgIcon-root': {
                fontSize: '0.8rem',
              },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
