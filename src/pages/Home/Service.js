import React from 'react';
import { FaDiagnoses, FaServicestack, FaUbuntu, FaUnity, FaWallet, FaYelp } from 'react-icons/fa'
const Service = () => {
    return (
        <div className='my-24'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/9p8qX4F/latrach-med-jamil-Eb6h-MEh-Gl-KY-unsplash.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="">
                    <div className="text-center">
                        <FaYelp className="mb-5 text-5xl text-primary font-bold mx-auto"></FaYelp>
                        <p className="mb-5 text-3xl text-primary font-bold">WHY YOU SHOULD CHOOSE US</p>
                        <p className="mb-5 text-5xl text-primary font-bold">Reasons to choose refix</p>

                        {/* service card start  */}
                        <div className='grid gap-3 grid-cols-1 md:grid-cols-5 lg-grid-cols-6'>

                            <div className="w-full bg-base-100 hover:shadow-xl hover:bg-accent hover:text-primary shadow-gray-400 mt-3">
                                <figure><FaUbuntu className="h-56 w-2/5 lg:w-3/5 mx-auto" />  </figure>
                                <h2 className="text-center font-bold text-xl my-3 uppercase">Qualified Experts</h2>
                            </div>
                            <div className="w-full bg-base-100 hover:shadow-xl hover:bg-accent hover:text-primary shadow-gray-400 mt-3">
                                <figure><FaServicestack className="h-56 w-2/5 lg:w-3/5 mx-auto" />  </figure>
                                <h2 className="text-center font-bold text-xl my-3 uppercase">Service on Schedule</h2>
                            </div>
                            <div className="w-full bg-base-100 hover:shadow-xl hover:bg-accent hover:text-primary shadow-gray-400 mt-3">
                                <figure><FaUnity className="h-56 w-2/5 lg:w-3/5 mx-auto" />  </figure>
                                <h2 className="text-center font-bold text-xl my-3 uppercase">Parts Warranty</h2>
                            </div>
                            <div className="w-full bg-base-100 hover:shadow-xl hover:bg-accent hover:text-primary shadow-gray-400 mt-3">
                                <figure><FaWallet className="h-56 w-2/5 lg:w-3/5 mx-auto" />  </figure>
                                <h2 className="text-center font-bold text-xl my-3 uppercase">Affordable Prices</h2>
                            </div>
                            <div className="w-full bg-base-100 hover:shadow-xl hover:bg-accent hover:text-primary shadow-gray-400 mt-3">
                                <figure><FaDiagnoses className="h-56 w-2/5 lg:w-3/5 mx-auto" />  </figure>
                                <h2 className="text-center font-bold text-xl my-3 uppercase">Special Offers</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;