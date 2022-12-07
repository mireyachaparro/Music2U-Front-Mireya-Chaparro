import { createAction } from '@reduxjs/toolkit';
import { User } from '../../models/user/user.model';
import { actionTypes } from './user.action.types';

export const startLoginAction = createAction<void>(actionTypes.startLogin);

export const loginAction = createAction<string>(actionTypes.login);

export const logoutAction = createAction<void>(actionTypes.logout);

export const addFavAction = createAction<User>(actionTypes.addFav);

export const deleteFavAction = createAction<User>(actionTypes.deleteFav);