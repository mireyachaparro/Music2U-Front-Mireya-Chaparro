import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { useUsers } from '../../../features/user/hooks/use.users';
import { mockStore } from '../../../mock/mocks';
import { AlbumDetails } from './details';

jest.mock('../../../features/user/hooks/use.users');

describe('Given AlbumDetails page', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            (useUsers as jest.Mock).mockReturnValue({
                handleAddFav: jest.fn(),
                users: { user: { isLogged: true } },
            });
            render(
                <Router>
                    <Provider store={mockStore}>
                        <AlbumDetails></AlbumDetails>
                    </Provider>
                </Router>
            );
        });
        test('Then it should display the word "artist"', () => {
            const element = screen.getByText(/artist/i);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display the word "release year"', () => {
            const element = screen.getByText(/release year/i);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display the word "gender"', () => {
            const element = screen.getByText(/gender/i);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display the word "format"', () => {
            const element = screen.getByText(/format/i);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display the word "price"', () => {
            const element = screen.getByText(/price/i);
            expect(element).toBeInTheDocument();
        });

        test('then it should display a target with alt attribute', () => {
            const element = screen.getByAltText(/cover/i);
            expect(element).toBeInTheDocument();
        });

        test('then it should display the word "inicia"', () => {
            const element = screen.getByText(/inicia/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('When the user clicks the button', () => {
        test.skip('que llame al boton de añadir a favoritos', () => {
            const button = screen.getByRole('button', { name: 'ADD' });
            userEvent.click(button);
            expect(useUsers().handleAddFav).toHaveBeenCalled();
        });
    });
});
