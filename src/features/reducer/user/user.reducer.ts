import { createReducer } from '@reduxjs/toolkit';
import { User } from '../../models/user/user.model';
import * as ac from '../user/user.action.creators';

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
        token: action.payload,
    }));

    builder.addCase(ac.logoutAction, (state, _action) => ({ ...state }));

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

    builder.addDefaultCase((state) => state);
});
