import { createAction } from '@reduxjs/toolkit';
import { Album } from '../models/album.model';
import { actionTypes } from './action.types';

export const loadAction = createAction<Array<Album>>(actionTypes.load);

export const addAction = createAction<Album>(actionTypes.add);

export const updateAction = createAction<Album>(actionTypes.update);

export const deleteAction = createAction<Album>(actionTypes.delete);
