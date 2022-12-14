import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { CdItem } from './cd.item';
import { mockProtoAlbum, mockStore } from '../../../../mock/mocks';

jest.mock('../../../../features/album/hook/use.albums');

describe('Given CdItem component', () => {
    describe('when we render the CD item', () => {
        beforeEach(() => {
            render(
                <Provider store={mockStore}>
                    <Router>
                        <CdItem item={mockProtoAlbum}></CdItem>
                    </Router>
                </Provider>
            );
        });

        test('then it should display a target with alt attribute', () => {
            const element = screen.getByAltText(/cover/i);
            expect(element).toBeInTheDocument();
        });
    });
});
