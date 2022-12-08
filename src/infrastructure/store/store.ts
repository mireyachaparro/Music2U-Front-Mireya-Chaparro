import { configureStore } from '@reduxjs/toolkit';
import { albumReducer } from '../../features/album/reducer/album.reducer';
import { userReducer } from '../../features/user/reducer/user.reducer';

export const appStore = configureStore({
    reducer: {
        albums: albumReducer,
        users: userReducer,
    },
    // preloadedState: {
    //     albums: [],
    //     users: { isLogged: false, isLogging: false, token: '', user: null },
    // },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
