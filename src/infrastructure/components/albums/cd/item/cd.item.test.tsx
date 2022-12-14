import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockProtoAlbum, mockStore } from '../../../../../mock/mocks';
import { AlbumsCdItem } from './cd.item';

jest.mock('../../../../../features/album/hook/use.albums');

describe('Given AlbumsCdItem component', () => {
    describe('when we render the CD item', () => {
        beforeEach(() => {
            render(
                <Provider store={mockStore}>
                    <Router>
                        <AlbumsCdItem item={mockProtoAlbum}></AlbumsCdItem>
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
