import { createSlice } from '@reduxjs/toolkit';

export const iconSlice = createSlice({
    name: 'icons',
    initialState: {
        icons: {},
        searchedIcons: [],
    },
    reducers: {
        initStore: (state, action) => {
            state.icons = action.payload;
        },
        filterIcons: (state, action) => {
            // loop over keys in icons
            // loop over keys in icons[key]
            // if label contains action.payload, add to searchedIcons
            // set state.searchedIcons to searchedIcons
        },
    },
});

// Action creators are generated for each case reducer function
export const { initStore, filterIcons } = iconSlice.actions;

export default iconSlice.reducer;
