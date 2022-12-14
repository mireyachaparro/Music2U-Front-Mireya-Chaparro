import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { VinylItem } from './vinyl.item';
import { mockProtoAlbum, mockStore } from '../../../../mock/mocks';

jest.mock('../../../../features/album/hook/use.albums');

describe('Given VinylItem component', () => {
    describe('when we render the vinyl item', () => {
        beforeEach(() => {
            render(
                <Provider store={mockStore}>
                    <Router>
                        <VinylItem item={mockProtoAlbum}></VinylItem>
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
