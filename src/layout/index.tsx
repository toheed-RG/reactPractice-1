import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../atoms/Navbar';

interface Props {
    children?: React.ReactNode;
}

export default function Layout(props: Props) {
    const { children } = props;

    return (
        <div>
            <Navbar />
            <main>{children || <Outlet />}</main>
        </div>
    );
}
