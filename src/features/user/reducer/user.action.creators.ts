import { createAction } from '@reduxjs/toolkit';
import { Album, ProtoAlbum } from '../../album/model/album.model';
import { User } from '../model/user.model';
import { actionTypes } from './user.action.types';

export const startLoginAction = createAction<void>(actionTypes.startLogin);

export const loginAction = createAction<{ user: User; token: string }>(
    actionTypes.login
);

export const logoutAction = createAction<void>(actionTypes.logout);

export const addFavAction = createAction<User>(actionTypes.addFav);
export const updatePossessionsAction = createAction<ProtoAlbum>(
    actionTypes.updatePossessions
);
export const deleteFavAction = createAction<User>(actionTypes.deleteFav);
