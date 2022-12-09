import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AlbumModel } from '../../../../features/album/model/album.model';
import { albumReducer } from '../../../../features/album/reducer/album.reducer';
import { rootState, rootStore } from '../../../store/store';
import { MemoryRouter as Router } from 'react-router-dom';
import { CdItem } from './cd.item';
import { userReducer } from '../../../../features/user/reducer/user.reducer';

jest.mock('../../../../features/album/hook/use.albums');

describe('Given CdItem component', () => {
    const preloadedState: rootState = {
        albums: [
            {
                ...new AlbumModel('', '', '', 1, '', '', 1, false),
                id: '1',
                owner: {
                    id: '',
                    name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    phone: '',
                    birthday: '',
                    favorites: [],
                    possessions: [],
                },
            },
        ],
        users: {
            token: '',
            isLogged: true,
            isLogging: false,
            user: {
                id: '',
                name: '',
                last_name: '',
                email: '',
                password: '',
                phone: '',
                birthday: '',
                favorites: [],
                possessions: [],
            },
        },
    };

    const mockStore: rootStore = configureStore({
        reducer: { albums: albumReducer, users: userReducer },
        preloadedState,
    });

    describe('when we render the CD item', () => {
        beforeEach(() => {
            const mockCD = {
                ...new AlbumModel('', '', '', 1, '', '', 1, false),
                id: '1',
                owner: {
                    id: '',
                    name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    phone: '',
                    birthday: '',
                    favorites: [],
                    possessions: [],
                },
            };

            render(
                <Provider store={mockStore}>
                    <Router>
                        <CdItem item={mockCD}></CdItem>
                    </Router>
                </Provider>
            );
        });

        test('then it should display the title', () => {
            const element = screen.getByAltText(/cover/i);
            expect(element).toBeInTheDocument();
        });
    });
});
