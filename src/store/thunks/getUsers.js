import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getUsers = createAsyncThunk('users/get_user', async (payload) => {
  const response = await axios.get('httsp://localhost:3001/users');
  return response.data;
});

export { getUsers };
