import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './menuSlice';
import profileSlice from './profileSlice';

const store = configureStore({
  reducer: {
    menuState: menuSlice,
    profileDetails: profileSlice,
  },
});

export default store;