import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStore } from '../../../../mock/mocks';
import FavPage from './fav.page';

describe('Given Fav page', () => {
    describe('When we render the component', () => {
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
