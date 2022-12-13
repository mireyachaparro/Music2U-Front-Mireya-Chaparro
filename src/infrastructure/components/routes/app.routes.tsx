import { lazy, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const LoginPage = lazy(() => import('../login/page/login.page'));
const RegisterPage = lazy(() => import('../register/page/register.page'));
const AddPage = lazy(() => import('../add/page/add.page'));
const CdPage = lazy(() => import('../cd/page/cd.page'));
const VinylPage = lazy(() => import('../vinyl/page/vinyl.page'));
const AlbumsPage = lazy(() => import('../albums/page/albums.page'));
const DetailsPage = lazy(() => import('../details/page/details.page'));
const FavPage = lazy(() => import('../favorites/page/fav.page'));
const ProfilePage = lazy(() => import('../profile/page/profile.page'));

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="albums">
                    <Route index element={<AlbumsPage></AlbumsPage>}></Route>
                    <Route
                        path=":id"
                        element={<DetailsPage></DetailsPage>}
                    ></Route>
                </Route>

                <Route path="" element={<LoginPage></LoginPage>}></Route>
                <Route
                    path="/register"
                    element={<RegisterPage></RegisterPage>}
                ></Route>
                <Route path="/add" element={<AddPage></AddPage>}></Route>
                <Route path="/cd" element={<CdPage></CdPage>}></Route>
                <Route path="/vinyl" element={<VinylPage></VinylPage>}></Route>
                <Route path="/favorites" element={<FavPage></FavPage>}></Route>
                <Route
                    path="/profile"
                    element={<ProfilePage></ProfilePage>}
                ></Route>
                <Route
                    path="*"
                    element={
                        <div className="h-screen bg-gray-100 pt-36">
                            <div className="flex justify-center">
                                <Link to="/albums">
                                    <img
                                        src="/assets/favicon.png"
                                        alt="logo"
                                        width="100px"
                                        height="100px"
                                    />
                                </Link>
                            </div>

                            <h1 className="flex justify-center mt-10 text-3xl">
                                No se encontró la ruta
                            </h1>
                        </div>
                    }
                ></Route>
            </Routes>
        </Suspense>
    );
}
