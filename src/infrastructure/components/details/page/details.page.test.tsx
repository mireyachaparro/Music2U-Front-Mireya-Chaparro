import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import DetailsPage from './details.page';

describe('Given Details page', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <DetailsPage />
                    </Router>
                </Provider>
            );
        });
        test('Then it should display the title', () => {
            const title = /format/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
