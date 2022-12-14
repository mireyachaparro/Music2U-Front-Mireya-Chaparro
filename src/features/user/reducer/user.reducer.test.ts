import { User } from '../model/user.model';
import { actionTypes } from './user.action.types';
import { albumReducer } from '../../album/reducer/album.reducer';
import { userReducer } from './user.reducer';

describe('given userReducer', () => {
    const mockPass = '';
    const userMock: User = {
        id: '1',
        name: '',
        last_name: '',
        email: '',
        password: mockPass,
        phone: '',
        birthday: '',
        favorites: [],
        possessions: [],
    };

    let action: {
        type: string;
        payload: unknown;
    };

    let state: {
        isLogged: boolean;
        isLogging: boolean;
        user: User | null;
        token: string;
    };

    describe('when action is startLogin', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.startLogin,
                payload: [],
            };
            state = {
                isLogging: false,
                isLogged: false,
                token: '',
                user: null,
            };
        });
        test('then it should return orginal state with isLogging: true', () => {
            action = {
                type: actionTypes.startLogin,
                payload: {
                    isLogging: true,
                    isLogged: false,
                    token: '',
                    user: null,
                },
            };
            state = {
                ...state,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });

        test('then it should return orginal state with islogged: true', () => {
            action = {
                type: actionTypes.login,
                payload: {
                    isLogging: false,
                    isLogged: true,
                    token: 'token',
                    user: userMock,
                },
            };
            state = {
                ...state,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });

        test('then it should return orginal state with logout: true', () => {
            action = {
                type: actionTypes.logout,
                payload: {
                    isLogging: false,
                    isLogged: false,
                    token: '',
                    user: null,
                },
            };
            state = {
                ...state,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
});
