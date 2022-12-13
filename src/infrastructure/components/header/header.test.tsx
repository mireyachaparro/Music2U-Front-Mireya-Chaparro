import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../store/store';
import { Header } from './header';

describe('Given Header component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <Header />
                    </Router>
                </Provider>
            );
        });
        test.skip('then it should display a target with alt attribute', () => {
            const element = screen.getByAltText(/logo/i);
            expect(element).toBeInTheDocument();
        });
    });
});
