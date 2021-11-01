import React from 'react';
import { Grid, TextField } from '@mui/material';
const Input = ({ name, label, type, onChange, value }) => {
  return (
    <Grid item xs={12} sm={12}>
      <TextField
        name={name}
        type={type}
        value={value}
        label={label}
        variant="outlined"
        onChange={onChange}
        required
        fullWidth
      />
    </Grid>
  );
};

export default Input;
