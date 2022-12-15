import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { CdList } from './cd.list';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockStore } from '../../../../mock/mocks';

describe('Given CdList component', () => {
    test('then it should render CdList', () => {
        render(
            <Router>
                <Provider store={mockStore}>
                    <CdList></CdList>
                </Provider>
            </Router>
        );
    });
});
