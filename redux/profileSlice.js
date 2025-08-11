import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: {
        first: ''
    }
};

const profileSlice = createSlice({
    name: 'profileDetails',
    initialState,
    reducers: {
        updateFirstName: (state, action) => {
            state.name.first = action.payload;
        }
    }
});

export const { updateFirstName } = profileSlice.actions;
export default profileSlice.reducer;