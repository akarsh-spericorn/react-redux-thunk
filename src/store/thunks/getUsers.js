import { createAsyncThunk } from '@reduxjs/toolkit';

import gateway from '../../gateway';

import { delay } from '../../utils';

const getUsers = createAsyncThunk('users/get_user', async () => {
  await delay(500);
  const response = await gateway.get('/users');
  return response.data;
});

export { getUsers };
