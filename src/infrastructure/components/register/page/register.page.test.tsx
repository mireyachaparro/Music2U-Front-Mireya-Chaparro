import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import RegisterPage from './register.page';

describe('Given Register page', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <RegisterPage />
                    </Router>
                </Provider>
            );
        });
        test('Then it should display the title', () => {
            const title = /personal details/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
