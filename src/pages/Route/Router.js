import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SellerSign from '../Auth/SellerSign';
import SignUp from '../Auth/SignUp';
import ErrorPage from '../ErrorPage/ErrorPage';
import Home from '../Home/Home';
import Products from '../products/Products';
import Layout from '../layout/Layout';
import AddProduct from '../Seller/AddProduct';
import AllProducts from '../products/AllProducts';
import DashBoardLayout from '../Dashboard/DashBoardLayout';
import MyOrders from '../Dashboard/MyOrders';
import Login from '../Auth/Login';
import AllBuyers from '../Admin/AllBuyers';
import AllSeller from '../Admin/AllSeller';
import MyProducts from '../Seller/MyProducts';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Blog from '../../Blog/Blog';
import DashboardPrivate from '../PrivateRoute/DashBoardPrivate';
import Checkout from '../Dashboard/Checkout';
import { async } from '@firebase/util';
export const router = createBrowserRouter([
    {
        path: '/', element: <Layout></Layout>, errorElement: <ErrorPage></ErrorPage>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/blog', element: <Blog></Blog> },

            { path: '/sign-up', element: <SignUp></SignUp> },
            { path: '/seller-sign', element: <SellerSign></SellerSign> },
            { path: '/login', element: <Login></Login> },
            {
                path: '/category/:id', loader: ({ params }) => {
                    const id = params.id
                    console.log(id)
                    return fetch(`http://localhost:5000/category/${id}`)
                }, element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute>,
            }
        ]
    },
    {
        path: '/dashboard', element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>, errorElement: <ErrorPage></ErrorPage>, children: [
            // { path: '/dashboard', element: <MyOrders></MyOrders> },
            { path: 'dashboard/my-order', element: <DashboardPrivate><MyOrders></MyOrders></DashboardPrivate> },
            { path: 'dashboard/all-buyers', element: <DashboardPrivate><AllBuyers></AllBuyers></DashboardPrivate> },
            { path: 'dashboard/all-sellers', element: <DashboardPrivate><AllSeller /></DashboardPrivate> },
            { path: 'dashboard/my-products', element: <DashboardPrivate><MyProducts></MyProducts></DashboardPrivate> },
            { path: 'dashboard/add-product', element: <AddProduct></AddProduct> },
            {
                path: '/dashboard/details/:id', loader: ({ params }) => {
                    return fetch(`http://localhost:5000/booked/pay/${params.id}`)
                }, element: <Checkout></Checkout>,
            },
        ]
    }
])