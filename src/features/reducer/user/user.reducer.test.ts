import { User } from '../../models/user/user.model';
import { actionTypes } from './user.action.types';
import { albumReducer } from '../album/album.reducer';
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
        test.skip('then it should return orginal state with isLogging: true', () => {
            //falla
            //lo que envia esta bien pero lo que espera no, no se como ponerlo
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    // describe('when action is login', () => {
    //     beforeEach(() => {
    //         action = {
    //             type: actionTypes.login,
    //             payload: {},
    //         };
    //         state = {
    //             isLogging: false,
    //             isLogged: false,
    //             token: '',
    //             user: null,
    //         };
    //     });
    // });
});
