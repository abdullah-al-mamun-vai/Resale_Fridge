import React, { useContext } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserContext } from '../Auth/AuthContext';

const Advertise = ({ addvertised, setSingleaddvertise }) => {
    const { user } = useContext(UserContext)
    return (
        <div className='py-16'>
            <h2 className='capitalize text-3xl font-bold text-center mb-24'>advertise</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    addvertised.map(addvertise =>
                        <div key={addvertise?._id} className="card w-full bg-base-100 shadow-xl shadow-gray-400">
                            <figure><img src={addvertise?.photo} alt="fridge" className='h-56' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {addvertise?.product}
                                    <div className="badge badge-neutral text-primary">Add</div>
                                </h2>
                                <p>{addvertise.des.length > 50 ? addvertise.des.slice(0, 50) + "..." : addvertise.des}</p>
                                <div>
                                    <p className='font-semibold capitalize'> BDT{addvertise?.discount_price}</p>
                                    <p className='font-semibold capitalize'> <del>BDT{addvertise?.regular_price}</del></p>
                                </div>
                                <div className="card-actions justify-between items-center">
                                    <div>
                                        <div className="badge badge-outline mr-2">{addvertise?.location}</div>
                                        <div className="badge badge-outline">Buy Year:{addvertise?.year}</div>

                                    </div>
                                    <label onClick={() => setSingleaddvertise(addvertise)} htmlFor="add_product" className="btn btn-neutral text-primary px-3">Buy Now</label>


                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex  items-center '>
                                        <div className="avatar">
                                            <div className="w-20 rounded-full relative">
                                                <img src={addvertise?.sellerImg} alt='' />
                                            </div>
                                            {
                                                addvertise.verified && <FaCheckCircle className='text-neutral absolute top-0 right-0 ' ></FaCheckCircle>
                                            }

                                        </div>
                                        <i className='ml-2 capitalize font-semibold'>{addvertise?.sellerName}</i>
                                    </div>
                                    <i className=" text-secondary">{addvertise?.time}</i>
                                </div>
                            </div>
                        </div>)
                }


            </div>
        </div>
    );
};

export default Advertise;