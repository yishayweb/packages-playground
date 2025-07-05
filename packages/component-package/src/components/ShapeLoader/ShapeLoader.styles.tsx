import { styled, keyframes } from '@mui/material/styles';
import {} from '@mui/system';

export const StyledShapeLoader = styled('span')(({ theme }) => ({
  backgroundColor: '#e5e5e5',
  display: 'inline-block',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    transform: 'translateX(-100%)',
    background:
      'linear-gradient(to right, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255,255,  0))',
    animation: `${loaderAnimation} 2s infinite`,
    content: '""',
  },
}));

const loaderAnimation = keyframes`100% {
  transform: translateX(100%);
}`;
