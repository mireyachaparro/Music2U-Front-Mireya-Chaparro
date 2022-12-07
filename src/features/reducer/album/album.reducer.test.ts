import { albumReducer } from './album.reducer';
import { actionTypes } from './album.action.types';
import { Album } from '../models/album.model';

describe('given albumReducer', () => {
    const albumMock: Album = {
        id: '1',
        name: '',
        artist: '',
        image: '',
        year: 1,
        gender: '',
        format: '',
        price: 1,
        sold: false,
    };

    let state: Array<Album>;
    let action: { type: string; payload: unknown };

    describe('when action is load', () => {
        test('then it should return state with action payload', () => {
            action = {
                type: actionTypes.load,
                payload: [albumMock],
            };
            state = [];
            const result = albumReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('when action is add', () => {
        test('then it should return state including the action payload', () => {
            action = {
                type: actionTypes.add,
                payload: albumMock,
            };
            state = [];
            const result = albumReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('when action is update with a valid id', () => {
        test('then it should return state including the action payload', () => {
            action = {
                type: actionTypes.update,
                payload: { ...albumMock, title: 'updated album' },
            };
            state = [albumMock];
            const result = albumReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('when action is update with an invalid id', () => {
        test('then it should return state with original state', () => {
            action = {
                type: actionTypes.update,
                payload: { ...albumMock, title: 'updated album', id: '2' },
            };
            state = [albumMock];
            const result = albumReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('when action is delete with a valid id', () => {
        test('then it should return state not including the action payload', () => {
            action = {
                type: actionTypes.delete,
                payload: albumMock.id,
            };
            state = [];

            const result = albumReducer(state, action);
            expect(result).toEqual([]);
        });
    });

    describe('when action is delete with an invalid id', () => {
        test('then it should return state with original state', () => {
            action = {
                type: actionTypes.delete,
                payload: { ...albumMock, id: '2' },
            };
            state = [albumMock];

            const result = albumReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('when action is any other', () => {
        action = {
            type: '',
            payload: null,
        };
        state = [albumMock];
        test('', () => {
            const result = albumReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
