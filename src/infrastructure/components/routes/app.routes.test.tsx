import { act, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';

jest.mock('../login/page/login.page', () => {
    return () => <div>Test Login</div>;
});

jest.mock('../register/page/register.page', () => {
    return () => <div>Test Register</div>;
});

jest.mock('../forgot/page/forgot.page', () => {
    return () => <div>Test Forgot</div>;
});

jest.mock('../add/page/add.page', () => {
    return () => <div>Test Add</div>;
});

jest.mock('../cd/page/cd.page', () => {
    return () => <div>Test CD</div>;
});

jest.mock('../vinyl/page/vinyl.page', () => {
    return () => <div>Test Vinyl</div>;
});

describe('Given AppRoutes component', () => {
    let paths: Array<string>;

    beforeEach(() => {
        paths = ['/', '/register', '/forgot', '/add', '/cd', '/vinyl'];
    });

    describe('when we render the component and the route is home', () => {
        render(
            <Router initialEntries={paths} initialIndex={0}>
                <AppRoutes></AppRoutes>
            </Router>
        );

        test('then it should display the LoginPage', async () => {
            const element = await screen.findByText(/test login/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('when we render the component and the route is register', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={1}>
                        <AppRoutes />
                    </Router>
                );
            });
        });

        test('then it should display the RegisterPage', async () => {
            const element = await screen.findByText(/test register/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('when we render the component and the route is forgot', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={2}>
                        <AppRoutes />
                    </Router>
                );
            });
        });

        test('then it should display the ForgotPage', async () => {
            const element = await screen.findByText(/test forgot/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('when we render the component and the route is add', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={3}>
                        <AppRoutes />
                    </Router>
                );
            });
        });

        test('then it should display the AddPage', async () => {
            const element = await screen.findByText(/test add/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('when we render the component and the route is CD', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={4}>
                        <AppRoutes />
                    </Router>
                );
            });
        });

        test('then it should display the CDPage', async () => {
            const element = await screen.findByText(/test cd/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('when we render the component and the route is Vinyl', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={5}>
                        <AppRoutes />
                    </Router>
                );
            });
        });

        test('then it should display the VinylPage', async () => {
            const element = await screen.findByText(/test vinyl/i);
            expect(element).toBeInTheDocument();
        });
    });
});
