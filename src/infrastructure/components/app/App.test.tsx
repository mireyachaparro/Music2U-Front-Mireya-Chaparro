import { act, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../store/store';
import { App } from './App';

interface CryptoPlus extends Crypto {
    randomBytes: (arr: number) => void;
    subtle: SubtleCrypto;
}

Object.defineProperty(global.self, 'crypto', {
    value: {
        getRandomValues: (arr: number) =>
            (crypto as CryptoPlus).randomBytes(arr),
    },
});
(global.crypto as CryptoPlus).subtle = {} as SubtleCrypto;

describe('Given App component', () => {
    describe('When we render the component', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router>
                        <Provider store={appStore}>
                            <App />
                        </Provider>
                    </Router>
                );
            });
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/account/i);
            expect(element).toBeInTheDocument();
        });
    });
});
