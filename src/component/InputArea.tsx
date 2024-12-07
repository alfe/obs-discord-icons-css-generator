import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles';

const InputArea = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(34deg, #282c34, 90%, #282c34)',
  boxShadow: '2px 2px 16px inset #ffffff10, 2px 2px 8px #0000004a',
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
}));
export default InputArea;
