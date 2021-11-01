import React, { useState } from 'react';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { signUp, signin } from '../../actions/auth';

import Input from './Input';
import { VerifiedUser } from '@mui/icons-material';
const initialState = { name: '', email: '', password: '', category: '' };
const Form = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const SwitchState = () => {
    setIsSignUp((prev) => !prev);
    setFormData(initialState);
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const formSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signUp(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
    setFormData(initialState);
  };
  return (
    <div>
      <Typography variant="h5" gutterBottom textAlign="center">
        <VerifiedUser /> {isSignUp ? 'SignUp' : 'SignIn'}
      </Typography>
      <form onSubmit={formSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel id="category">Category</InputLabel>
              <Select
                labelId="category"
                id="category"
                name="category"
                value={formData.category}
                label="Category"
                onChange={onChange}
                fullWidth
                required
              >
                <MenuItem value="owner">Owner</MenuItem>
                <MenuItem value="manager">Manager</MenuItem>
                <MenuItem value="employee">Employee</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {isSignUp && (
            <>
              <Input
                name="name"
                label="Name"
                type="text"
                value={formData.name}
                onChange={onChange}
              />
            </>
          )}

          <Input
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={onChange}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={onChange}
          />
          <Grid item xs={12} sm={12}>
            <Button variant="contained" type="submit" fullWidth>
              {isSignUp ? 'SignUp' : 'SignIn'}
            </Button>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button onClick={SwitchState} fullWidth>
              {isSignUp
                ? 'already have on account ?Signin'
                : `don't have an account? SignUp`}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
