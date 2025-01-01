import { createSlice } from '@reduxjs/toolkit';

export const iconSlice = createSlice({
    name: 'icons',
    initialState: {
        icons: {} as Record<string, string[]>, // e.g. { ai: ["AiFillAlert", ...], bi: ["BiAlarm", ...] }
        searchedIcons: [] as string[],
    },
    reducers: {
        initStore: (state, action) => {
            state.icons = action.payload;
        },
        filterIcons: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            const searchedIcons: string[] = [];

            // Loop over each icon set (e.g. ai, bi, bs, etc.)
            for (const iconSet in state.icons) {
                // Loop through the icons in that set
                for (const iconName of state.icons[iconSet]) {
                    // Check if the icon’s name matches the search term
                    if (iconName.toLowerCase().includes(searchTerm)) {
                        searchedIcons.push(iconName);
                    }
                }
            }

            // Update state with the filtered icons
            state.searchedIcons = searchedIcons;
        },
    },
});

// Action creators are generated for each case reducer function
export const { initStore, filterIcons } = iconSlice.actions;

export default iconSlice.reducer;
