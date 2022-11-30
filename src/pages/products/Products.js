import React, { useContext } from 'react';
import { UserContext } from '../Auth/AuthContext';
import BookingModal from './BookingModal';
import { FaCheckCircle, FaFacebook, FaTiktok } from 'react-icons/fa'

const Products = ({ products, setSingleProduct }) => {
    const { serverCurrentUser } = useContext(UserContext)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-16'>
                {
                    products.map(product =>
                        <div key={product?._id} className="card w-full bg-base-100 shadow-xl shadow-gray-400">
                            <figure><img src={product?.photo} alt="fridge" className='h-56' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {product?.product}
                                    <div className="badge badge-neutral text-primary">{product?.condition}</div>
                                </h2>
                                <p>{product.des.length > 50 ? product.des.slice(0, 50) + "..." : product.des}</p>
                                <div>
                                    <p className='font-semibold capitalize'> BDT{product?.discount_price}</p>
                                    <p className='font-semibold capitalize'> <del>BDT{product?.regular_price}</del></p>
                                </div>
                                <div className="card-actions justify-between items-center">
                                    <div>
                                        <div className="badge badge-outline mr-2">{product?.location}</div>
                                        <div className="badge badge-outline">Buy Year:{product?.year}</div>

                                    </div>
                                    <label onClick={() => setSingleProduct(product)} htmlFor="booking_product" className="btn btn-neutral text-primary px-3">Buy Now</label>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex  items-center '>
                                        <div className="avatar">
                                            <div className="w-20 rounded-full relative">
                                                <img src={product?.sellerImg} alt='' />
                                            </div>
                                            {
                                                product.verified && <FaCheckCircle className='text-neutral absolute top-0 right-0 ' ></FaCheckCircle>
                                            }

                                        </div>
                                        <i className='ml-2 capitalize font-semibold'>{product?.sellerName}</i>
                                    </div>
                                    <i className=" text-secondary">{product?.time}</i>
                                </div>
                            </div>
                        </div>)
                }
            </div >
        </div>
    );
};

export default Products;