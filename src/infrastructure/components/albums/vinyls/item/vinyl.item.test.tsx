import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockProtoAlbum, mockStore } from '../../../../../mock/mocks';
import { AlbumsVinylItem } from './vinyl.item';

jest.mock('../../../../../features/album/hook/use.albums');

describe('Given AlbumsVinylItem component', () => {
    describe('when we render the Vinyl item', () => {
        beforeEach(() => {
            render(
                <Provider store={mockStore}>
                    <Router>
                        <AlbumsVinylItem
                            item={mockProtoAlbum}
                        ></AlbumsVinylItem>
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
