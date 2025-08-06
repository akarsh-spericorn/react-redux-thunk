import { createSlice } from '@reduxjs/toolkit';
import { getUsers, addUser } from '../index';
const usersSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
    getUserLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUsers.pending, (state, action) => {
      state.getUserLoading = true;
      state.error = null;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.getUserLoading = false;
      state.error = null;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = 'Something went wrong';
    });
    builder.addCase(addUser.pending, (state, action) => {
      state.error = null;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      // state.data = action.payload;
      state.error = null;
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.error = 'Something went wrong';
    });
  },
});

const usersReducer = usersSlice.reducer;

export { usersReducer };
