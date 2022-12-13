import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { useAlbums } from '../../../../features/album/hook/use.albums';
import { AlbumModel } from '../../../../features/album/model/album.model';
import { albumReducer } from '../../../../features/album/reducer/album.reducer';
import { userReducer } from '../../../../features/user/reducer/user.reducer';
import { rootState, rootStore } from '../../../store/store';
import { ProfileList } from './profile';

jest.mock('../../../../features/album/hook/use.albums');

describe('Given profileList component', () => {
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
                possessions: [
                    {
                        name: 'Synchronicity',
                        artist: 'The Police',
                        image: 'https://m.media-amazon.com/images/I/714G8sVHh9L._SL1400_.jpg',
                        year: 1983,
                        gender: 'Rock',
                        format: 'Vinyl',
                        price: 13,
                        sold: false,
                        id: '',
                        owner: {
                            id: '',
                            last_name: '',
                            name: '',
                            email: '',
                            password: '',
                            phone: '',
                            birthday: '',
                            possessions: [],
                            favorites: [],
                        },
                    },
                ],
            },
        },
    };

    const mockStore: rootStore = configureStore({
        reducer: { albums: albumReducer, users: userReducer },
        preloadedState,
    });

    describe('when we render the album item', () => {
        beforeEach(() => {
            (useAlbums as jest.Mock).mockReturnValue({
                handleDelete: jest.fn(),
            });
            render(
                <Router>
                    <Provider store={mockStore}>
                        <ProfileList></ProfileList>
                    </Provider>
                </Router>
            );
        });

        test('then it should display a target with alt attribute', () => {
            const element = screen.getByAltText(/cover/i);
            expect(element).toBeInTheDocument();
        });

        test('que llame al boton de borrar', () => {
            const button = screen.getByRole('button', { name: 'delete' });
            userEvent.click(button);
            expect(useAlbums().handleDelete).toHaveBeenCalled();
        });

        test.skip('que llame al boton de log out', () => {
            const button = screen.getByRole('button', { name: 'Log out' });
            userEvent.click(button);
            // expect(handleLogout).toHaveBeenCalled();
        });
    });
});
