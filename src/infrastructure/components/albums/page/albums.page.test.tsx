import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import CdPage from './albums.page';

describe('Given Albums page', () => {
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
        test('Then it should display the word "CD"', () => {
            const titleCD = /cd/i;
            const element = screen.getByText(titleCD);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display the word "Vinyl"', () => {
            const titleCD = /vinyl/i;
            const element = screen.getByText(titleCD);
            expect(element).toBeInTheDocument();
        });
    });
});
