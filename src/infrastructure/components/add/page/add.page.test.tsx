import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStore } from '../../../../mock/mocks';
import AddPage from './add.page';

describe('Given Add page', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={mockStore}>
                    <Router>
                        <AddPage></AddPage>
                    </Router>
                </Provider>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/add an album/i);
            expect(element).toBeInTheDocument();
        });
    });
});
