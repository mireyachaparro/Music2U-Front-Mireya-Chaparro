import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import ForgotPage from './forgot.page';

describe('Given Forgot page', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <ForgotPage />
                    </Router>
                </Provider>
            );
        });
        test('Then it should display the title', () => {
            const title = /forgot/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
