import { createReducer } from '@reduxjs/toolkit';
import { User } from '../../models/user/user.model';
import * as ac from '../user/user.action.creators';

const initialState: {
    isLogged: boolean;
    isLogging: boolean;
    user: User | null;
    token: string;
} = { isLogged: false, isLogging: false, token: '', user: null };

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.startLoginAction, (state, action) => action.payload);

    // builder.addCase(ac.loginAction, (state, action) => action.payload);

    // builder.addCase(ac.logoutAction, (state, action) => [
    //     ...state,
    //     action.payload,
    // ]);

    // builder.addCase(ac.addFavAction, (state, action) =>
    //     state.map((item) =>
    //         item.id === action.payload.id ? action.payload : item
    //     )
    // );

    // builder.addCase(ac.deleteFavAction, (state, action) =>
    //     state.filter((item) => item.id !== action.payload.id)
    // );

    builder.addDefaultCase((state) => state);
});
