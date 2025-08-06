import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../thunks/getUsers';
const usersSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = 'Something went wrong';
      state.loading = false;
    });
  },
});

// export const { addMovie, deleteMovie } = moviesSlice.actions;

const usersReducer = usersSlice.reducer;

export { usersReducer };
