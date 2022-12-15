import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockStore } from '../../../../../mock/mocks';
import { AlbumsVinylList } from './vinyl.list';

describe('Given AlbumsVinylList component', () => {
    test('then it should render AlbumsVinylList', () => {
        render(
            <Router>
                <Provider store={mockStore}>
                    <AlbumsVinylList></AlbumsVinylList>
                </Provider>
            </Router>
        );
    });
});
