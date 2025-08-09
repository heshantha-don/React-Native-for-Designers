import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  action: false
};

const menuSlice = createSlice({
  name: 'menuState',
  initialState,
  reducers: {
    toggleMenuState: (state) => {
      state.action = !state.action;
    },
  },
});

export const { toggleMenuState } = menuSlice.actions;
export default menuSlice.reducer;