import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { FavList } from './fav.list';
import { BrowserRouter as Router } from 'react-router-dom';
import { useUsers } from '../../../../features/user/hooks/use.users';
import userEvent from '@testing-library/user-event';
import { mockStore } from '../../../../mock/mocks';

jest.mock('../../../../features/album/hook/use.albums');
jest.mock('../../../../features/user/hooks/use.users');

describe('Given favList component', () => {
    describe('when we render the CD item', () => {
        beforeEach(() => {
            (useUsers as jest.Mock).mockReturnValue({
                handleDeleteFav: jest.fn(),
                users: { user: { isLogged: true, favorites: [{}] } },
            });
            render(
                <Router>
                    <Provider store={mockStore}>
                        <FavList></FavList>
                    </Provider>
                </Router>
            );
        });

        test('then it should display the title', () => {
            const element = screen.getByText(/€/i);
            expect(element).toBeInTheDocument();
        });

        test('que llame al boton deborrar favorito', () => {
            const button = screen.getByRole('button', { name: 'deleteFav' });
            userEvent.click(button);
            expect(useUsers().handleDeleteFav).toHaveBeenCalled();
        });
    });
});
