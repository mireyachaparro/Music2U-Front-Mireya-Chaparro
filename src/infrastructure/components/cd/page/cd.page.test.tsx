import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStore } from '../../../../mock/mocks';
import CdPage from './cd.page';

describe('Given Cd page', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={mockStore}>
                    <Router>
                        <CdPage></CdPage>
                    </Router>
                </Provider>
            );
        });

        test('Then it should display the title', () => {
            const title = /cd/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
