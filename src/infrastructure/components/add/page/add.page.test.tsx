import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import AddPage from './add.page';

describe('Given Add page', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <AddPage />
                    </Router>
                </Provider>
            );
        });
        test('Then it should display the title', () => {
            const title = /add an album/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
