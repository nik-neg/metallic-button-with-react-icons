import { configureStore } from '@reduxjs/toolkit';
import iconReducer from './reducer/iconReducer.ts';

export default configureStore({
    reducer: {
        icons: iconReducer,
    },
});
