import { configureStore } from '@reduxjs/toolkit';
import { albumReducer } from '../../features/reducer/reducer';

export const appStore = configureStore({
    reducer: {
        albums: albumReducer,
    },
    preloadedState: { albums: [] },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
