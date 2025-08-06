import { configureStore } from '@reduxjs/toolkit';

import { usersReducer } from './slices/userSlice';
import { albumsReducer } from './slices/albumsSlice';
const store = configureStore({
  reducer: {
    users: usersReducer,
    albums: albumsReducer,
  },
});

export default store;

export * from './thunks/addUser';
export * from './thunks/getUsers';
export * from './thunks/getAlbumsById';
