import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AlbumModel } from '../../../../features/album/model/album.model';
import { albumReducer } from '../../../../features/album/reducer/album.reducer';
import { rootState, rootStore } from '../../../store/store';
import { userReducer } from '../../../../features/user/reducer/user.reducer';
import { FavList } from './fav.list';
import { BrowserRouter as Router } from 'react-router-dom';
import { useUsers } from '../../../../features/user/hooks/use.users';
import userEvent from '@testing-library/user-event';

jest.mock('../../../../features/album/hook/use.albums');
jest.mock('../../../../features/user/hooks/use.users');

describe('Given favList component', () => {
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
                favorites: [
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
            (useUsers as jest.Mock).mockReturnValue({
                handleDeleteFav: jest.fn(),
            });
            render(
                <Router>
                    <Provider store={mockStore}>
                        <FavList></FavList>
                    </Provider>
                </Router>
            );
        });

        test.skip('then it should display the title', () => {
            const element = screen.getByText(/€/i);
            expect(element).toBeInTheDocument();
        });

        test.skip('que llame al boton deborrar favorito', () => {
            const button = screen.getByRole('button', { name: 'deleteFav' });
            userEvent.click(button);
            expect(useUsers().handleDeleteFav).toHaveBeenCalled();
        });
    });
});
