import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStore } from '../../../../mock/mocks';
import VinylPage from './vinyl.page';

describe('Given Vinyl page', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={mockStore}>
                    <Router>
                        <VinylPage></VinylPage>
                    </Router>
                </Provider>
            );
        });

        test('Then it should display the title', () => {
            const title = /vinyl/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
