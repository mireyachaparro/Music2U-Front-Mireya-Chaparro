import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const LoginPage = lazy(() => import('../login/page/login.page'));
const RegisterPage = lazy(() => import('../register/page/register.page'));
const ForgotPage = lazy(() => import('../forgot/page/forgot.page'));
const AddPage = lazy(() => import('../add/page/add.page'));
const ListPage = lazy(() => import('../list/page/list.page'));

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="" element={<LoginPage></LoginPage>}></Route>
                <Route
                    path="/register"
                    element={<RegisterPage></RegisterPage>}
                ></Route>
                <Route
                    path="/forgot"
                    element={<ForgotPage></ForgotPage>}
                ></Route>
                <Route path="/add" element={<AddPage></AddPage>}></Route>
                <Route path="/list" element={<ListPage></ListPage>}></Route>
                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </Suspense>
    );
}
