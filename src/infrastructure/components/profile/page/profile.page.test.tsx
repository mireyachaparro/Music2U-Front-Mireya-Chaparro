import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStore } from '../../../../mock/mocks';
import ProfilePage from './profile.page';

describe('Given Profile page', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={mockStore}>
                    <Router>
                        <ProfilePage></ProfilePage>
                    </Router>
                </Provider>
            );
        });

        test('Then it should display the paragraph "Log out"', () => {
            const element = screen.getByText(/log out/i);
            expect(element).toBeInTheDocument();
        });
    });
});
