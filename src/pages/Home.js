import { Container, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { useStyles } from './style';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
const Home = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [category, setCategory] = useState(user?.result?.category);

  return (
    <div>
      <Navbar />
      <Container>
        {!user ? (
          <Paper
            className={classes.paper}
            style={{
              margin: '50px auto',

              padding: '12px 15px',
              borderRadius: '5px',
            }}
          >
            <Typography variant="h4" textAlign="center">
              Your Task Details{' '}
            </Typography>

            <Typography variant="subtitle1">
              1.Create an application with Sign in, Signup, and Home page.
            </Typography>
            <Typography variant="subtitle1">
              2.Create 3 different categories of users (Owner, Manager,
              Employee), there must be different contents visible against each
              category on the Home page..
            </Typography>
            <Typography variant="subtitle1">
              3.During the signup process, one should clearly mention which
              category they belong to..
            </Typography>
            <Typography variant="subtitle1">
              4.Setup basic React Navigation and Redux in your application for
              smooth transitions..
            </Typography>
          </Paper>
        ) : (
          <>
            <Typography
              variant="h3"
              color="white"
              textAlign="center"
              style={{ marginTop: '10px' }}
            >
              Hello {user?.result?.name}
            </Typography>
            {category === 'owner' ? (
              <>
                <Typography className={classes.subHeading} variant="h5">
                  You are a Owner
                </Typography>
                <Typography variant="subtitle1" className={classes.subHeading}>
                  You are a owner of this Website You can do any thing you like
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '30px',
                  }}
                >
                  <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                  />
                </div>
              </>
            ) : category === 'employee' ? (
              <>
                <Typography className={classes.subHeading} variant="subtitle1">
                  I am a Employee of this Company
                </Typography>
                <Typography variant="subtitle1" className={classes.subHeading}>
                  Hello Hi,Have Nice day
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '30px',
                  }}
                >
                  <Loader
                    type="BallTriangle"
                    color="#00BFFF"
                    height={100}
                    width={100}
                  />
                </div>
              </>
            ) : (
              <>
                <Typography className={classes.subHeading} variant="subtitle1">
                  You are a Manager{' '}
                </Typography>
                <Typography variant="subtitle1" className={classes.subHeading}>
                  Your position is Manager here ,You have some power
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '30px',
                  }}
                >
                  <Loader
                    type="Hearts"
                    color="#00BFFF"
                    height={200}
                    width={200}
                  />
                </div>
              </>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default Home;
