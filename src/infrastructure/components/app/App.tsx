import React from 'react';
import { Header } from '../header/header';
import { AppRoutes } from '../routes/app.routes';

export function App() {
    return (
        <>
            <Header></Header>
            <AppRoutes></AppRoutes>
        </>
    );
}

export default App;
