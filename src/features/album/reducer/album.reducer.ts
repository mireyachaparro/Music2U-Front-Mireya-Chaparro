import { createReducer } from '@reduxjs/toolkit';
import { Album } from '../model/album.model';
import * as ac from './album.action.creators';

const initialState: Array<Album> = [];

export const albumReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadAction, (state, action) => action.payload);

    builder.addCase(ac.addAction, (state, action) => [
        ...state,
        action.payload,
    ]);

    builder.addCase(ac.updateAction, (state, action) =>
        state.map((item) =>
            item.id === action.payload.id ? action.payload : item
        )
    );

    builder.addCase(ac.deleteAction, (state, action) =>
        state.filter((item) => item.id !== action.payload)
    );

    builder.addDefaultCase((state) => state);
});
