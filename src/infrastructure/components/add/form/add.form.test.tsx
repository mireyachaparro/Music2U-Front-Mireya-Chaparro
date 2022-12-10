import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { useAlbums } from '../../../../features/album/hook/use.albums';
import { appStore } from '../../../store/store';
import { AddForm } from './add.form';

jest.mock('../../../../features/album/hook/use.albums');

describe('given addForm component', () => {
    let formElements: Array<{ role: string; name: string }>;
    beforeEach(() => {
        formElements = [
            { role: 'textbox', name: 'Name' },
            { role: 'textbox', name: 'Artist' },
            { role: 'textbox', name: 'Year' },
            { role: 'textbox', name: 'Gender' },
            { role: 'textbox', name: 'Format' },
            { role: 'spinbutton', name: 'Price' },
            { role: 'button', name: 'ADD' },
        ];

        (useAlbums as jest.Mock).mockReturnValue({ handleAdd: jest.fn() });

        render(
            <Provider store={appStore}>
                <Router>
                    <AddForm></AddForm>
                </Router>
            </Provider>
        );
    });

    describe('when the form is rendered', () => {
        test('then it should display a form with 7 inputs and a button', () => {
            formElements.forEach((item) => {
                const element: HTMLFormElement = screen.getByRole(item.role, {
                    name: item.name,
                });
                expect(element).toBeInTheDocument();
            });
        });
    });

    describe('when the user types in the inputs', () => {
        test('then the typed text in second input should be in the screen', () => {
            const mockTyped = 'test';

            const input = screen.getByRole(formElements[1].role, {
                name: formElements[0].name,
            });

            userEvent.type(input, mockTyped);

            expect(input).toHaveValue(mockTyped);
        });
    });

    describe('then the user clicks the button', () => {
        test('the handleAdd from the custom hook should be called', () => {
            const button = screen.getByRole(formElements[6].role);
            userEvent.click(button);
            const result = useAlbums().handleAdd;
            expect(result).toHaveBeenCalled();
        });
    });
});
