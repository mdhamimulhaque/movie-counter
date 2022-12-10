import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <h2>Footer</h2>
        </div>
    );
};

export default Main;