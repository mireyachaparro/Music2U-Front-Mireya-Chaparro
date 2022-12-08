import { createAction } from '@reduxjs/toolkit';
import { Album } from '../model/album.model';
import { actionTypes } from './album.action.types';

export const loadAction = createAction<Array<Album>>(actionTypes.load);

export const addAction = createAction<Album>(actionTypes.add);

export const updateAction = createAction<Album>(actionTypes.update);

export const deleteAction = createAction<Album['id']>(actionTypes.delete);

export const selectAction = createAction<Album>(actionTypes.delete);
