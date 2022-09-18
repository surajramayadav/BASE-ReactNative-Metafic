import { createSlice } from '@reduxjs/toolkit';
export const userslice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
    },
    reducers: {
        setloading: (state, action) => {
            state.loading = action.payload;
        },

    },
});

//actions
export const { setloading } = userslice.actions;


export default userslice.reducer;
