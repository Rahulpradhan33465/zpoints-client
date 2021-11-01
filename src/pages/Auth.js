import { Container, Paper } from '@mui/material';
import React from 'react';
import Form from '../components/Form/form';
import Navbar from '../components/Navbar/Navbar';
import { useStyles } from './style';

const Auth = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Container>
        <Paper className={classes.paper}>
          <Form />
        </Paper>
      </Container>
    </div>
  );
};

export default Auth;
