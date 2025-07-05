import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)({
  borderRadius: '4rem',
  fontWeight: 'bold',
  backgroundColor: '#00005f',
  color: 'green',
  '&:disabled': {
    backgroundColor: '#b2b2b2',
    color: '#ffffff',
  },
});
