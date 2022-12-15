import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Menu } from './menu';

describe('Given Menu component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Menu></Menu>
                </Router>
            );
        });
        test('then it should display a target with alt attribute', () => {
            const element = screen.getByAltText(/logo/i);
            expect(element).toBeInTheDocument();
        });
    });
});
