import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AlbumsCdList } from './cd.list';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockStore } from '../../../../../mock/mocks';

describe('Given AlbumsCdList component', () => {
    test('then it should render AlbumsCdList', () => {
        render(
            <Router>
                <Provider store={mockStore}>
                    <AlbumsCdList></AlbumsCdList>
                </Provider>
            </Router>
        );
    });
});
