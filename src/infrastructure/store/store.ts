import { configureStore } from '@reduxjs/toolkit';
import { albumReducer } from '../../features/reducer/album/album.reducer';
import { userReducer } from '../../features/reducer/user/user.reducer';

export const appStore = configureStore({
    reducer: {
        albums: albumReducer,
        users: userReducer,
    },
    preloadedState: {
        albums: [],
        users: { isLogged: false, isLogging: false, token: '', user: null },
    },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
