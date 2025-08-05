import React from "react";
import { createBrowserRouter, Navigate, redirect } from "react-router-dom";

import Layout from "./layout";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Login from "./components/Login.tsx";
import Logout from "./components/Logout.tsx";
import ROUTES from "./constants/lib/routes";

export const protectedLoader = (isConnected) => {
    if (!isConnected) {
        return redirect(ROUTES.LOGIN);
    }
    return null;
}

export const createAppRouter = (isConnected) =>
    createBrowserRouter([
        {
            path: ROUTES.HOME,
            element: <Layout />,
            loader: () => protectedLoader(isConnected),
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: ROUTES.ABOUT,
                    element: <About />,
                },
                {
                    path: ROUTES.LOGOUT,
                    element: <Logout />,
                }
            ]
        },
        {
            path: ROUTES.LOGIN,
            element: <Login />,
        },
        {
            path: ROUTES.NOT_FOUND,
            element: <Navigate to={ROUTES.HOME} replace />,
        }
    ]);
