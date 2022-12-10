import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../store/store';
import { AlbumDetails } from './album.details';

describe('Given AlbumDetails page', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <AlbumDetails />
                    </Router>
                </Provider>
            );
        });
        test('Then it should display the word "artist"', () => {
            const title = /artist/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display the word "release year"', () => {
            const title = /release year/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display the word "gender"', () => {
            const title = /gender/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display the word "format"', () => {
            const title = /format/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display the word "price"', () => {
            const title = /price/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });

        test('then it should display a target with alt attribute', () => {
            const element = screen.getByAltText(/cover/i);
            expect(element).toBeInTheDocument();
        });
    });
});
