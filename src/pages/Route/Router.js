import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SellerSign from '../Auth/SellerSign';
import SignUp from '../Auth/SignUp';
import ErrorPage from '../ErrorPage/ErrorPage';
import Home from '../Home/Home';
import Products from '../products/Products';
import Layout from '../layout/Layout';
import AddProduct from '../Seller/AddProduct';
export const router = createBrowserRouter([
    {
        path: '/', element: <Layout></Layout>, errorElement: <ErrorPage></ErrorPage>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/add-product', element: <AddProduct></AddProduct> },
            { path: '/sign-up', element: <SignUp></SignUp> },
            { path: '/seller-sign', element: <SellerSign></SellerSign> },
            {
                path: '/category/:id', loader: ({ params }) => {
                    const id = params.id
                    console.log(id)
                    return fetch(`http://localhost:5000/category/${id}`)
                }, element: <Products></Products>,
            }
        ]
    }
])