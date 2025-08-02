import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  action: false
};

const menuOpenState = createSlice({
  name: 'isMenuOpen',
  initialState,
  reducers: {
    toggleMenuState: (state) => {
      state.action = !state.action;
    },
  },
});

const rootReducer = combineReducers({
  isMenuOpen: menuOpenState.reducer,
});

export const { toggleMenuState } = menuOpenState.actions;
export default rootReducer;
