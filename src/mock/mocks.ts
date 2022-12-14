import { configureStore } from '@reduxjs/toolkit';
import { Album } from '../features/album/model/album.model';
import { albumReducer } from '../features/album/reducer/album.reducer';
import { User, UserModel } from '../features/user/model/user.model';
import { userReducer } from '../features/user/reducer/user.reducer';
import { rootState } from '../infrastructure/store/store';

export const mockPass = '';
export const userMock: User = {
    id: '1',
    name: '',
    last_name: '',
    email: '',
    password: mockPass,
    phone: '',
    birthday: '',
    favorites: [],
    possessions: [{ id: '1' } as Album],
};

export const mockProtoAlbum = {
    id: '',
    name: '',
    artist: '',
    image: '',
    year: 1,
    gender: '',
    format: 'CD',
    price: 1,
    sold: false,
    owner: userMock,
};

export const preloadedState: rootState = {
    albums: [mockProtoAlbum, { format: 'Vinyl' } as Album],
    users: {
        isLogged: true,
        isLogging: false,
        user: userMock,
        token: 'token',
    },
};

export const mockStore = configureStore({
    reducer: {
        albums: albumReducer,
        users: userReducer,
    },
    preloadedState,
});
