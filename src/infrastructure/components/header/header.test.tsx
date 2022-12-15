import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStore } from '../../../mock/mocks';
import { Header } from './header';

describe('Given Header component', () => {
    test('When we render the component', () => {
        render(
            <Provider store={mockStore}>
                <Router>
                    <Header />
                </Router>
            </Provider>
        );
    });
});
