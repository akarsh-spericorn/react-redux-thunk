import { createAsyncThunk } from '@reduxjs/toolkit';

import gateway from '../../gateway';

import { delay } from '../../utils';

const getAlbumsById = createAsyncThunk(
  'users/get_albums_userid',
  async (userId) => {
    await delay(500);
    const response = await gateway.get(`/albums?userId=${userId}`);
    return response.data;
  },
);

export { getAlbumsById };
