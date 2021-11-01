import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const useStyles = makeStyles({
  paper: {
    width: '60%',
    margin: '30px auto',
    padding: '20px ',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  subHeading: {
    color: 'whitesmoke',
  },
});
