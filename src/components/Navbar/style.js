import { deepPurple, purple } from '@mui/material/colors';
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
  appBar: {
    borderRadius: 5,

    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 50px',
    [theme.breakpoints.down('md')]: {
      padding: '5px',
    },
  },
  heading: {
    color: purple[700],
    textDecoration: 'none',
    fontSize: '3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      padding: '5px 1px',
    },
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
    },
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
});
