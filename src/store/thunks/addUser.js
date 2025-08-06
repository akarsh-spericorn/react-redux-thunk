import { createAsyncThunk } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';

import gateway from '../../gateway';

import { getUsers } from '../index';

import { delay } from '../../utils';

const addUser = createAsyncThunk('users/add_user', async (_, thunkAPI) => {
  await delay(500);
  const response = await gateway.post('/users', {
    name: faker.person.fullName(),
  });
  thunkAPI.dispatch(getUsers());
  return response.data;
});

export { addUser };
