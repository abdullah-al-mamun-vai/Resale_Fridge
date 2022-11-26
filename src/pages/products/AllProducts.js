import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import Products from './Products';

const AllProducts = () => {
    const [singleProdutcs, setSingleProduct] = useState({})
    const products = useLoaderData()

    return (
        <div>
            <Products products={products} setSingleProduct={setSingleProduct}></Products>
            <BookingModal singleProdutcs={singleProdutcs}></BookingModal>
        </div>
    );
};

export default AllProducts;