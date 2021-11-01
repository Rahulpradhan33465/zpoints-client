import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: 'AUTH', data });
    console.log(data);
    router.push('/');
  } catch (error) {
    console.log(error);
    window.alert('Invalid Credentials');
  }
};

export const signUp = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: 'AUTH', data });
    router.push('/');
  } catch (error) {
    console.log(error);
    window.alert('Email already exists');
  }
};
