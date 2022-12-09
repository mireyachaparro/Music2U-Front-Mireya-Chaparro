import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { useAlbums } from '../../../../features/album/hook/use.albums';
import { appStore } from '../../../store/store';
import { AddForm } from './form';

jest.mock('../../../../features/album/hook/use.albums');

describe('given addForm component', () => {
    let formElements: Array<{ role: string; name: string }>;
    beforeEach(() => {
        formElements = [
            { role: 'textbox', name: 'Name' },
            { role: 'textbox', name: 'Image' },
            { role: 'textbox', name: 'Artist' },
            { role: 'textbox', name: 'Year' },
            { role: 'textbox', name: 'Gender' },
            { role: 'textbox', name: 'Format' },
            { role: 'spinbutton', name: 'Price' },
            { role: 'button', name: 'ADD' },
        ];

        (useAlbums as jest.Mock).mockResolvedValue({ handleAdd: jest.fn() });

        render(
            <Provider store={appStore}>
                <Router>
                    <AddForm></AddForm>
                </Router>
            </Provider>
        );
    });

    describe('when the form is rendered', () => {
        test('then it shoudl display a form with 7 inputs and a button', () => {
            formElements.forEach((item) => {
                const element: HTMLFormElement = screen.getByRole(item.role, {
                    name: item.name,
                });
                console.log(item.role);
                expect(element).toBeInTheDocument();
            });
        });
    });
});
