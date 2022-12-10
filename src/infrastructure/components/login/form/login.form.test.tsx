import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { useUsers } from '../../../../features/user/hooks/use.users';
import { appStore } from '../../../store/store';
import { LoginForm } from './login.form';

jest.mock('../../../../features/user/hooks/use.users');

describe('given LoginForm component', () => {
    let formElements: Array<{ role: string; name: string }>;

    beforeEach(() => {
        formElements = [
            { role: 'textbox', name: 'Email' },
            { role: 'button', name: 'LOGIN' },
        ];

        (useUsers as jest.Mock).mockReturnValue({ handleLogin: jest.fn() });

        render(
            <Provider store={appStore}>
                <Router>
                    <LoginForm></LoginForm>
                </Router>
            </Provider>
        );
    });

    describe('when the form is rendered', () => {
        test('then it should display a form with 2 inputs and a button', () => {
            formElements.forEach((item) => {
                const element: HTMLFormElement = screen.getByRole(item.role, {
                    name: item.name,
                });
                expect(element).toBeInTheDocument();
            });
        });
    });

    describe('when the user types in the inputs', () => {
        test('then the first text in second input should be in the screen', () => {
            const mockTyped = 'test';

            const input = screen.getByRole(formElements[0].role, {
                name: formElements[0].name,
            });

            userEvent.type(input, mockTyped);

            expect(input).toHaveValue(mockTyped);
        });
    });

    describe('then the user clicks the button', () => {
        test.skip('the handleLogin from the custom hook should be called', () => {
            const button = screen.getByRole(formElements[1].role);
            userEvent.click(button);
            const result = useUsers().handleLogin;
            expect(result).toHaveBeenCalled();
        });
    });
});
