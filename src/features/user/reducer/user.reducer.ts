/* eslint-disable @typescript-eslint/no-unused-vars */
import { createReducer } from '@reduxjs/toolkit';
import { User } from '../model/user.model';
import * as ac from './user.action.creators';

const initialState: {
    isLogged: boolean;
    isLogging: boolean;
    user: User | null;
    token: string;
} = { isLogging: false, isLogged: false, token: '', user: null };

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.startLoginAction, (state, _action) => ({
        ...state,
        isLogging: true,
    }));

    builder.addCase(ac.loginAction, (state, action) => ({
        ...state,
        isLogging: false,
        isLogged: true,
        token: action.payload.token,
        user: action.payload.user,
    }));

    builder.addCase(ac.logoutAction, (_state, _action) => initialState);

    builder.addCase(ac.addFavAction, (state, action) => ({
        ...state,
        isLogged: true,
        user: action.payload,
    }));

    builder.addCase(ac.deleteFavAction, (state, action) => ({
        ...state,
        isLogged: true,
        user: action.payload,
    }));

    builder.addCase(ac.updatePossessionsAction, (state, action) => ({
        ...state,
        isLogged: true,
        user: {
            ...state.user,
            possessions: [...(state.user as User).possessions, action.payload],
        } as User,
    }));

    builder.addCase(ac.deletePossessionsAction, (state, action) => ({
        ...state,
        isLogged: true,
        user: {
            ...state.user,
            possessions: (state.user as User).possessions.filter(
                (item) => item.id !== action.payload
            ),
        } as User,
    }));

    builder.addDefaultCase((state) => state);
});
