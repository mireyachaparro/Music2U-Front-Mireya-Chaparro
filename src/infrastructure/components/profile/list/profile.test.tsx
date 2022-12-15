import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { useAlbums } from '../../../../features/album/hook/use.albums';
import { mockStore } from '../../../../mock/mocks';
import { ProfileList } from './profile';

jest.mock('../../../../features/album/hook/use.albums');

describe('Given profileList component', () => {
    describe('when we render it', () => {
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

        test('then the button "delete" should call handleDelete function from custom hook', () => {
            const button = screen.getByRole('button', { name: 'delete' });
            userEvent.click(button);
            expect(useAlbums().handleDelete).toHaveBeenCalled();
        });

        test.skip('then the button "log out" should call handleLogOut function', () => {
            userEvent.click(screen.getByText(/Log out/i));
        });
    });
});
