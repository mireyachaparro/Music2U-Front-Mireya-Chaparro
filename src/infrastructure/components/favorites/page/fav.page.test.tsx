import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { albumReducer } from '../../../../features/album/reducer/album.reducer';
import { userReducer } from '../../../../features/user/reducer/user.reducer';
import { rootState, rootStore } from '../../../store/store';
import FavPage from './fav.page';

describe('Given Fav page', () => {
    describe('When we render the component', () => {
        const preloadedState: rootState = {
            albums: [],
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

        beforeEach(() => {
            render(
                <Provider store={mockStore}>
                    <Router>
                        <FavPage></FavPage>
                    </Router>
                </Provider>
            );
        });

        test('Then it should display the title', () => {
            const title = /my favorites/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
