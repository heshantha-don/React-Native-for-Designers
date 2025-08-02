import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './menuSlice';

const store = configureStore({
  reducer: {
    menuState: menuSlice,
  },
});

export default store;