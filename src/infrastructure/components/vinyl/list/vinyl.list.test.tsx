import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockStore } from '../../../../mock/mocks';
import { VinylList } from './vinyl.list';

describe('Given VinylList component', () => {
    test('then it should render VinylList', () => {
        render(
            <Router>
                <Provider store={mockStore}>
                    <VinylList></VinylList>
                </Provider>
            </Router>
        );
    });
});
