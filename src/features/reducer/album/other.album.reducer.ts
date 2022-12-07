import { createReducer } from '@reduxjs/toolkit';
import { Album } from '../../models/album.model';
import * as ac from './album.action.creators';

const initialState: {
    albums: Array<Album>;
    actualAlbum: Album | null;
} = { albums: [], actualAlbum: null };

export const albumReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadAction, (state, action) => ({
        ...state,
        albums: action.payload,
    }));

    builder.addCase(ac.addAction, (state, action) => ({
        ...state,
        albums: [...state.albums, action.payload],
    }));

    builder.addCase(ac.updateAction, (state, action) => ({
        ...state,
        albums: [
            ...state.albums.map((item) =>
                item.id === action.payload.id ? action.payload : item
            ),
        ],
    }));

    builder.addCase(ac.deleteAction, (state, action) => ({
        ...state,
        albums: [
            ...state.albums.filter((item) => item.id !== action.payload.id),
        ],
    }));

    builder.addCase(ac.selectAction, (state, action) => ({
        ...state,
        actualAlbums: action.payload,
    }));

    builder.addDefaultCase((state) => state);
});
