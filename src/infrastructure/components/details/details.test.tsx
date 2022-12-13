import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { AlbumModel } from '../../../features/album/model/album.model';
import { albumReducer } from '../../../features/album/reducer/album.reducer';
import { useUsers } from '../../../features/user/hooks/use.users';
import { userReducer } from '../../../features/user/reducer/user.reducer';
import { rootState, rootStore } from '../../store/store';
import { AlbumDetails } from './details';

jest.mock('../../../features/user/hooks/use.users');

describe('Given AlbumDetails page', () => {
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
                id: '1',
                name: 'a',
                last_name: 'a',
                email: 'a@a',
                password: 'a',
                phone: '1',
                birthday: '1',
                favorites: [],
                possessions: [],
            },
        },
    };

    const mockStore: rootStore = configureStore({
        reducer: { albums: albumReducer, users: userReducer },
        preloadedState,
    });

    describe('When we render the component', () => {
        beforeEach(() => {
            (useUsers as jest.Mock).mockReturnValue({
                handleAddFav: jest.fn(),
            });
            render(
                // <Provider store={appStore}>
                //     <Router>
                //         <AlbumDetails />
                //     </Router>
                // </Provider>
                <Router>
                    <Provider store={mockStore}>
                        <AlbumDetails></AlbumDetails>
                    </Provider>
                </Router>
                // <Provider store={mockStore}>
                //     <AlbumDetails></AlbumDetails>
                // </Provider>
            );
        });
        test.skip('Then it should display the word "artist"', () => {
            const element = screen.getByText(/artist/i);
            expect(element).toBeInTheDocument();
        });

        test.skip('Then it should display the word "release year"', () => {
            const element = screen.getByText(/release year/i);
            expect(element).toBeInTheDocument();
        });

        test.skip('Then it should display the word "gender"', () => {
            const element = screen.getByText(/gender/i);
            expect(element).toBeInTheDocument();
        });

        test.skip('Then it should display the word "format"', () => {
            const element = screen.getByText(/format/i);
            expect(element).toBeInTheDocument();
        });

        test.skip('Then it should display the word "price"', () => {
            const element = screen.getByText(/price/i);
            expect(element).toBeInTheDocument();
        });

        test.skip('then it should display a target with alt attribute', () => {
            const element = screen.getByAltText(/cover/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('When the user clicks the button', () => {
        test.skip('A method from the custom hook should be call', () => {
            const button = screen.getByRole('button');
            userEvent.click(button);
            expect(useUsers().handleAddFav).toHaveBeenCalled();
        });
    });
});