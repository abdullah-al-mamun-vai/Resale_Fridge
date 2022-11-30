import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import BookingModal from './BookingModal';
import Products from './Products';

const AllProducts = () => {
    const [singleProdutcs, setSingleProduct] = useState({})
    const products = useLoaderData()

    return (
        <div>
            <Products products={products} setSingleProduct={setSingleProduct}></Products>
            <PrivateRoute><BookingModal singleProdutcs={singleProdutcs}></BookingModal></PrivateRoute>
        </div>
    );
};

export default AllProducts;