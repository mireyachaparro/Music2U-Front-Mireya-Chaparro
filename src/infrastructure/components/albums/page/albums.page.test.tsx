import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import CdPage from './albums.page';

describe('Given Cd page', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <CdPage />
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
