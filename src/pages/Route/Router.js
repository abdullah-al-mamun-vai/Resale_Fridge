import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import Home from '../Home/Home';
import Layout from '../layout/Layout';
export const router = createBrowserRouter([
    {
        path: '/', element: <Layout></Layout>, errorElement: <ErrorPage></ErrorPage>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
        ]
    }
])