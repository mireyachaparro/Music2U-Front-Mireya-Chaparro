import { act, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';

jest.mock('../login/page/login.page', () => {
    return () => <div>Test Login</div>;
});

jest.mock('../register/page/register.page', () => {
    return () => <div>Test Register</div>;
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

jest.mock('../favorites/page/fav.page', () => {
    return () => <div>Test Favorites</div>;
});

jest.mock('../profile/page/profile.page', () => {
    return () => <div>Test Profile</div>;
});

jest.mock('../albums/page/albums.page', () => {
    return () => <div>Test albums</div>;
});

describe('Given AppRoutes component', () => {
    let paths: Array<string>;

    beforeEach(() => {
        paths = [
            '/',
            '/register',
            '/add',
            '/cd',
            '/vinyl',
            '/favorites',
            '/profile',
            '/albums',
        ];
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

    describe('when we render the component and the route is add', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={2}>
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

    describe('when we render the component and the route is cd', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={3}>
                        <AppRoutes />
                    </Router>
                );
            });
        });

        test('then it should display the CdPage', async () => {
            const element = await screen.findByText(/test cd/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('when we render the component and the route is Vinyl', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={4}>
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

    describe('when we render the component and the route is favorites', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={5}>
                        <AppRoutes />
                    </Router>
                );
            });
        });

        test('then it should display the FavPage', async () => {
            const element = await screen.findByText(/test fav/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('when we render the component and the route is Profile', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={6}>
                        <AppRoutes />
                    </Router>
                );
            });
        });

        test('then it should display the ProfilePage', async () => {
            const element = await screen.findByText(/test profile/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('when we render the component and the route is Details', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={7}>
                        <AppRoutes />
                    </Router>
                );
            });
        });

        test('then it should display the DetailsPage', async () => {
            const element = await screen.findByText(/test albums/i);
            expect(element).toBeInTheDocument();
        });
    });
});
