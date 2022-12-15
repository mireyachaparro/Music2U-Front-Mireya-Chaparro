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
    describe('when we render the album item', () => {
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

        test('then it should display the euro symbol', () => {
            const element = screen.getByText(/€/i);
            expect(element).toBeInTheDocument();
        });

        test('then the button should call "deleteFav" function', () => {
            const button = screen.getByRole('button', { name: 'deleteFav' });
            userEvent.click(button);
            expect(useUsers().handleDeleteFav).toHaveBeenCalled();
        });
    });
});
