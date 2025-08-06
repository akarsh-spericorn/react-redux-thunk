import { createSlice } from '@reduxjs/toolkit';
import { getAlbumsById } from '../index';
const albumsSlice = createSlice({
  name: 'album',
  initialState: {
    data: [],
    albumsLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAlbumsById.pending, (state, action) => {
      state.albumsLoading = true;
      state.error = null;
    });
    builder.addCase(getAlbumsById.fulfilled, (state, action) => {
      state.data.push(...action.payload);
      state.albumsLoading = false;
      state.error = null;
    });
    builder.addCase(getAlbumsById.rejected, (state, action) => {
      state.error = 'Something went wrong';
    });
  },
});

const albumsReducer = albumsSlice.reducer;

export { albumsReducer };
